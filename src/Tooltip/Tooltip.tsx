import {
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
import React, { useCallback, useEffect, useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";

import { useTheme } from "../theme";
import { Arrow } from "./Arrow";
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
            onClick={onClick}
          >
            <div className={classes.tooltip}>
              {header && <div>{header}</div>}
              {title}
            </div>
            {hasArrow && (
              <Arrow
                ref={mountArrow}
                x={arrowX}
                y={arrowY}
                variant={variant}
                side={side}
              />
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Tooltip.displayName = "Tooltip";
