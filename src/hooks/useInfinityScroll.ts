import { useEffect, useRef } from "react";

export const useInfinityScroll = (onScrollEnd?: () => void) => {
  const observerTarget = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const callbackRef = useRef(onScrollEnd);

  // Keep callback ref updated to avoid stale closures
  useEffect(() => {
    callbackRef.current = onScrollEnd;
  }, [onScrollEnd]);

  useEffect(() => {
    const target = observerTarget.current;

    if (!target) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Call callback directly instead of using state as trigger
          callbackRef.current?.();
        }
      },
      { threshold: 0 }
    );

    observer.current.observe(target);

    return () => {
      if (target && observer.current) {
        observer.current.unobserve(target);
      }
    };
  }, [observerTarget]);

  return observerTarget;
};
