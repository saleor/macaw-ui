import { throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";

export type Position = Record<"x" | "y", number>;

function getPosition<T extends HTMLElement>(
  anchor?: T | null
): Position | undefined {
  if (anchor) {
    return {
      x: anchor.scrollLeft,
      y: anchor.scrollTop,
    };
  }
  return undefined;
}

export function isScrolledToBottom(
  anchor: HTMLElement,
  position: Position,
  offset: number = 0
) {
  return !!anchor && position
    ? position.y + anchor.clientHeight + offset >= anchor.scrollHeight
    : undefined;
}

export function isScrolledToTop(
  anchor: HTMLElement,
  position: Position,
  offset: number = 0
) {
  return !!anchor && position ? position.y <= offset : undefined;
}

export interface UseElementScrollOpts<T extends HTMLElement> {
  anchor: T | null;
  position: Position | undefined;
}

export interface UseElementScroll<T extends HTMLElement>
  extends UseElementScrollOpts<T> {
  setAnchor: React.Dispatch<T | null>;
}

export function useElementScroll<T extends HTMLElement>(): UseElementScroll<T> {
  const [anchorEl, setAnchorEl] = useState<T | null>(null);
  const [scroll, setScroll] = useState(getPosition(anchorEl));

  useEffect(() => {
    if (!!anchorEl) {
      const recalcScrollPos = throttle(
        () => setScroll(getPosition(anchorEl)),
        100
      );
      anchorEl.addEventListener("scroll", recalcScrollPos);
      const resizeObserver = new ResizeObserver(recalcScrollPos);
      resizeObserver.observe(anchorEl);

      return () => {
        anchorEl.removeEventListener("scroll", recalcScrollPos);
        resizeObserver.disconnect();
      };
    }

    // Silence eslint's complaining about not all code returning value
    return;
  }, [anchorEl]);

  useEffect(() => {
    setTimeout(() => setScroll(getPosition(anchorEl)), 100);
  }, [anchorEl]);

  const setAnchor = useCallback((el) => {
    setAnchorEl(el);
  }, []);

  return {
    setAnchor,
    anchor: anchorEl,
    position: scroll,
  };
}
