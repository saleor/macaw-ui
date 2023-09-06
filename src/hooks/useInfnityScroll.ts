import { useEffect, useRef } from "react";

export const useInfnityScroll = (onScrollEnd?: () => void) => {
  const observerTarget = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!onScrollEnd || !observerTarget) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onScrollEnd();
        }
      },
      { threshold: 0, rootMargin: "50px" }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, onScrollEnd]);

  return observerTarget;
};
