import {
  useFloating as useFloatingHook,
  size,
  UseFloatingReturn,
  flip,
  autoUpdate,
} from "@floating-ui/react-dom";

export const useFloating = (): UseFloatingReturn => {
  return useFloatingHook({
    whileElementsMounted: autoUpdate,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 10,
      }),
    ],
  });
};
