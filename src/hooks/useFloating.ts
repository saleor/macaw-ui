import {
  useFloating as useFloatingHook,
  size,
  UseFloatingReturn,
  flip,
  ReferenceType,
  autoUpdate,
} from "@floating-ui/react-dom";
import { useLayoutEffect } from "react";

export const useFloating = <T extends ReferenceType>(
  zIndexValue = 1,
  isOpen: boolean
): UseFloatingReturn<T> & {
  floatingStyles: { zIndex: number };
} => {
  const { floatingStyles, refs, update, strategy, ...rest } =
    useFloatingHook<T>({
      middleware: [
        flip(),
        size({
          apply({ rects, availableHeight, elements }) {
            Object.assign(elements.floating.style, {
              position: strategy,
              top: rects.reference.y + rects.reference.height + "px" ?? "",
              left: rects.reference.x + "px" ?? "",
              width: `${rects.reference.width}px`,
              maxHeight: `${availableHeight}px`,
            });
          },
        }),
      ],
    });

  useLayoutEffect(() => {
    if (isOpen) {
      return autoUpdate(
        refs.reference.current!,
        refs.floating.current!,
        update
      );
    }
  }, [isOpen, update, refs.floating, refs.reference]);

  return {
    ...rest,
    refs,
    strategy,
    update,
    floatingStyles: {
      ...floatingStyles,
      zIndex: zIndexValue,
      pointerEvents: "auto",
    },
  };
};
