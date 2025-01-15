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
  const { floatingStyles, refs, update, x, y } = useFloatingHook<T>({
    strategy: "fixed",
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
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
      top: y ?? 0,
      left: x ?? 0,
      zIndex: zIndexValue,
      pointerEvents: "auto",
    },
  };
};
