import {
  useFloating as useFloatingHook,
  size,
  UseFloatingReturn,
  flip,
  ReferenceType,
  autoUpdate,
} from "@floating-ui/react-dom";
import { useLayoutEffect } from "react";

interface UseFloatingProps {
  zIndexValue?: number;
  shouldUpdate: boolean;
}

export const useFloating = <T extends ReferenceType>({
  zIndexValue = 2,
  shouldUpdate,
}: UseFloatingProps): {
  floatingStyles: UseFloatingReturn<T>["floatingStyles"] & { zIndex: number };
  setReferenceRef: (node: T | null) => void;
  setFloatingRef: (node: HTMLElement | null) => void;
} => {
  const { floatingStyles, refs, update } = useFloatingHook<T>({
    strategy: "fixed",
    middleware: [
      flip(),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            top: `${rects.reference.y + rects.reference.height}px`,
            left: `${rects.reference.x}px`,
            width: `${rects.reference.width}px`,
            maxHeight: `${Math.min(230, availableHeight)}px`,
          });
        },
      }),
    ],
  });

  // Use floating-ui's provided callback refs
  const setReferenceRef = refs.setReference;
  const setFloatingRef = refs.setFloating;

  useLayoutEffect(() => {
    if (shouldUpdate && refs.reference.current && refs.floating.current) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [shouldUpdate, refs, update]);

  return {
    setReferenceRef,
    setFloatingRef,
    floatingStyles: {
      ...floatingStyles,
      zIndex: zIndexValue,
      pointerEvents: "auto",
    },
  };
};
