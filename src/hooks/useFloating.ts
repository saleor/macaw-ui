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
  zIndexValue = 1,
  shouldUpdate,
}: UseFloatingProps): {
  floatingStyles: UseFloatingReturn<T>["floatingStyles"] & { zIndex: number };
  refs: UseFloatingReturn<T>["refs"];
} => {
  const { floatingStyles, refs, update, strategy } = useFloatingHook<T>({
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
    if (shouldUpdate) {
      return autoUpdate(
        refs.reference.current!,
        refs.floating.current!,
        update
      );
    }
  }, [shouldUpdate, update, refs.floating, refs.reference]);

  return {
    refs,
    floatingStyles: {
      ...floatingStyles,
      zIndex: zIndexValue,
      pointerEvents: "auto",
    },
  };
};
