import {
  useFloating as useFloatingHook,
  size,
  UseFloatingReturn,
  flip,
  autoUpdate,
  ReferenceType,
} from "@floating-ui/react-dom";

export const useFloating = <T extends ReferenceType>(
  zIndexValue = 1
): UseFloatingReturn<T> & {
  floatingStyles: { zIndex: number };
} => {
  const { floatingStyles, ...rest } = useFloatingHook<T>({
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

  return {
    ...rest,
    floatingStyles: {
      ...floatingStyles,
      zIndex: zIndexValue,
      pointerEvents: "auto",
    },
  };
};
