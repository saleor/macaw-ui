import {
  AlignedPlacement,
  arrow,
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
  shift,
  Side,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react-dom-interactions";
import clsx from "clsx";
import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";

import { useTheme } from "../theme";
import useStyles from "./styles";

export interface TooltipProps {
  variant?: "success" | "warning" | "error";
  placement?: Placement;
  arrow?: boolean;
  onClick?: React.MouseEventHandler<any>;
  onOpen?: () => void;
  onClose?: () => void;
  open?: boolean;
  initialOpen?: boolean;
  disabled?: boolean;
  children: React.ReactElement;
  header?: string;
  title?: React.ReactNode;
}

const mapSide: Record<Side, Side> = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
} as const;

export const Tooltip: React.FC<TooltipProps> = ({
  variant,
  placement: initialPlacement = "bottom-start",
  arrow: hasArrow = true,
  onOpen,
  onClose,
  onClick,
  open: forceState,
  initialOpen = false,
  disabled = false,
  children,
  header,
  title,
}) => {
  const { themeType } = useTheme();

  const [stateOpen, setStateOpen] = useState(initialOpen);
  const [isMountedReference, setIsMountedReference] = useState(false);
  const [isMountedFloating, setIsMountedFloating] = useState(false);
  const arrowRef = useRef<HTMLSpanElement | null>(null);

  const open = forceState ?? stateOpen;

  const {
    x,
    y,
    placement,
    strategy,
    context,
    refs,
    update,
    middlewareData: { arrow: { x: arrowX, y: arrowY, centerOffset } = {} },
  } = useFloating({
    placement: initialPlacement,
    open,
    onOpenChange: (isOpen) => {
      setStateOpen(isOpen);

      if (isOpen) {
        onOpen?.();
      } else {
        onClose?.();
      }
    },
    middleware: [
      offset(5),
      flip(),
      // padding matches padding of tooltip box
      shift({ padding: 12 }),
      // padding matches border-radius of tooltip box
      arrow({ element: arrowRef, padding: 8 }),
    ],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
  ]);

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current || !open) {
      return;
    }
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [isMountedFloating, isMountedReference, update, open]);

  const side = useMemo<Side>(() => {
    return placement.split("-")[0] as Side;
  }, [placement]);

  const classes = useStyles({ variant, side });

  const mountArrow = useCallback(
    (node) => {
      arrowRef.current = node;
      update();
    },
    [update]
  );

  const mountFloating = useCallback(
    (node) => {
      refs.floating.current = node;
      update();
      setIsMountedFloating(!!node);
    },
    [update]
  );

  const mountReference = useCallback(
    (node) => {
      refs.reference.current = node;
      update();
      setIsMountedReference(!!node);
    },
    [update]
  );

  if (disabled) {
    return children;
  }

  return (
    <>
      {React.cloneElement(
        children,
        getReferenceProps({
          ref: mountReference,
          ...children.props,
        })
      )}
      <FloatingPortal>
        {open && (
          <div
            {...getFloatingProps({
              ref: mountFloating,
              className: clsx(themeType === "dark" && classes.dark),
              style: {
                position: strategy,
                top: y ?? "",
                left: x ?? "",
              },
            })}
          >
            <div className={classes.tooltip}>
              {header && <div>{header}</div>}
              {title}
            </div>
            {hasArrow && (
              <div
                className={classes.arrowContainer}
                ref={mountArrow}
                style={{
                  top: arrowY ?? "",
                  left: arrowX ?? "",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path
                    className={classes.backgroundPath}
                    fill-rule="evenodd"
                    d="M12.25 7 8.6 2.133a2 2 0 0 0-3.2 0L1.75 7h10.5Z"
                    clip-rule="evenodd"
                  />
                  <path
                    className={classes.borderPath}
                    fill-rule="evenodd"
                    d="M5.8 2.433c.6-.8 1.8-.8 2.4 0L11.25 6.5h1.25L9 1.833a2.5 2.5 0 0 0-4 0L1.5 6.5h1.25L5.8 2.433Z"
                    clip-rule="evenodd"
                  />
                  <path
                    className={classes.backgroundPath}
                    d="M12.5 6.5h-11l-.75 1h12.5l-.75-1Z"
                  />
                </svg>
              </div>
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Tooltip.displayName = "Tooltip";
