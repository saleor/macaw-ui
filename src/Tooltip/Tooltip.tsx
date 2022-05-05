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
  placement: initialPlacement = "bottom",
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
  const classes = useStyles({ variant });
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
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
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
      shift({ padding: 12 }),
      arrow({ element: arrowRef }),
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

  const swappedSide = useMemo(() => {
    return mapSide[side];
  }, [side]);

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
              className: classes.tooltipContainer,
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
                  [swappedSide]: "-6px",
                }}
              >
                <div className={classes.relative}>
                  <svg
                    className={classes.arrow}
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6 1.13333L24 15L0 15L10.4 1.13333C11.2 0.0666662 12.8 0.0666661 13.6 1.13333Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className={classes.arrowOverlay}
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6 1.13333L24 15L0 15L10.4 1.13333C11.2 0.0666662 12.8 0.0666661 13.6 1.13333Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Tooltip.displayName = "Tooltip";
