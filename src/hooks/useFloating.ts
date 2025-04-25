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
  refs: UseFloatingReturn<T>["refs"];
} => {
  const { floatingStyles, refs, update } = useFloatingHook<T>({
    strategy: "fixed",
    middleware: [
      flip({
        fallbackPlacements: ["top", "bottom"],
        crossAxis: false,
        mainAxis: true,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          const spaceBelow =
            availableHeight - (rects.reference.y + rects.reference.height);

          // Only place above if there's not enough space below for minimum height
          const shouldPlaceAbove = spaceBelow < 230;

          Object.assign(elements.floating.style, {
            top: shouldPlaceAbove
              ? `${rects.reference.y - Math.min(230, rects.reference.y)}px`
              : `${rects.reference.y + rects.reference.height}px`,
            left: `${rects.reference.x}px`,
            width: `${rects.reference.width}px`,
            maxHeight: `${Math.min(230, shouldPlaceAbove ? rects.reference.y : spaceBelow)}px`,
          });
        },
      }),
    ],
  });

  useLayoutEffect(() => {
    if (shouldUpdate && refs.reference.current && refs.floating.current) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [shouldUpdate, refs, update]);

  return {
    refs,
    floatingStyles: {
      ...floatingStyles,
      zIndex: zIndexValue,
      pointerEvents: "auto",
    },
  };
};
