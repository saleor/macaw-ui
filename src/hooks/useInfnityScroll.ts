import { useEffect, useRef, useState } from "react";

export const useInfnityScroll = (onScrollEnd?: () => void) => {
  const observerTarget = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0 }
    )
  );

  useEffect(() => {
    if (isIntersecting) {
      onScrollEnd?.();
      setIsIntersecting(false);
    }
  }, [isIntersecting, onScrollEnd]);

  useEffect(() => {
    if (!onScrollEnd || !observerTarget.current) {
      return;
    }

    if (observerTarget.current) {
      observer.current.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, onScrollEnd]);

  return observerTarget;
};
