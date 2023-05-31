import { useEffect, useRef } from "react";

export function useIntersectionObserver({
  callback,
  options = {},
}: {
  callback?: () => void;
  options?: IntersectionObserverInit;
}) {
  const { threshold = 1, root = null, rootMargin = "0%" } = options;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref?.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && callback) {
          callback();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, callback]);

  return [ref];
}
