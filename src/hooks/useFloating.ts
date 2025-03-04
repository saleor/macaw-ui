import {
  useFloating as useFloatingHook,
  size,
  UseFloatingReturn,
  flip,
  autoUpdate,
} from "@floating-ui/react-dom";

export const useFloating = (
  zIndexValue = 1
): UseFloatingReturn & {
  floatingStyles: { zIndex: number };
} => {
  const { floatingStyles, ...rest } = useFloatingHook({
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
