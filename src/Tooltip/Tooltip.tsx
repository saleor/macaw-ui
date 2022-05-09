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
import React from "react";

import { useTheme } from "../theme";
import { useWatchRefMount } from "../utils/useWatchMountRef";
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
  header?: React.ReactNode;
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

  const [stateOpen, setStateOpen] = React.useState(initialOpen);
  const arrowRef = React.useRef<HTMLSpanElement | null>(null);

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
  const [isMountedReference, mountReference] = useWatchRefMount(
    refs.reference,
    update
  );
  const [isMountedFloating, mountFloating] = useWatchRefMount(
    refs.floating,
    update
  );
  const [, mountArrow] = useWatchRefMount(arrowRef, update);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
  ]);

  React.useEffect(() => {
    if (!refs.reference.current || !refs.floating.current || !open) {
      return;
    }
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [isMountedFloating, isMountedReference, update, open]);

  const side = React.useMemo<Side>(() => {
    return placement.split("-")[0] as Side;
  }, [placement]);

  const classes = useStyles({ variant, side });

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
              {header && <div className={classes.header}>{header}</div>}
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
