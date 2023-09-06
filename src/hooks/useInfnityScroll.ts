import { useEffect, useRef } from "react";

export const useInfnityScroll = (onScrollEnd?: () => void) => {
  const observerTarget = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!onScrollEnd || !observerTarget.current) {
      return;
    }

    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onScrollEnd();
          }
        },
        { threshold: 0, rootMargin: "50px" }
      );
    }

    if (observerTarget.current) {
      observer.current.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current?.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, onScrollEnd]);

  return observerTarget;
};
