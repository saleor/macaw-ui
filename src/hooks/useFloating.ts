import {
  useFloating as useFloatingHook,
  size,
  UseFloatingReturn,
  flip,
  ReferenceType,
  autoUpdate,
} from "@floating-ui/react-dom";

interface UseFloatingProps {
  zIndexValue?: number;
}

export const useFloating = <T extends ReferenceType>({
  zIndexValue = 2,
}: UseFloatingProps): {
  floatingStyles: UseFloatingReturn<T>["floatingStyles"] & { zIndex: number };
  refs: UseFloatingReturn<T>["refs"];
} => {
  const { floatingStyles, refs } = useFloatingHook<T>({
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${Math.min(230, availableHeight)}px`,
          });
        },
      }),
    ],
  });

  return {
    refs,
    floatingStyles: {
      ...floatingStyles,
      zIndex: zIndexValue,
      pointerEvents: "auto",
    },
  };
};
