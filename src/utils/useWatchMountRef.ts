import { MutableRefObject, useCallback, useState } from "react";

export const useWatchRefMount = <T>(
  ref: MutableRefObject<T | null>,
  onMount?: () => void
): [boolean, (node: T | null) => void] => {
  const [isMounted, setIsMounted] = useState(false);

  const mountRef = useCallback(
    (node: T | null) => {
      ref.current = node;
      setIsMounted(!!node);
      if (node && onMount) {
        onMount();
      }
    },
    [onMount]
  );

  return [isMounted, mountRef];
};
