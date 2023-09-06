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
    const observerOCurrent = observer.current;
    const target = observerTarget.current;

    if (target) {
      observerOCurrent.observe(target);
    }

    return () => {
      if (target) {
        observerOCurrent.unobserve(target);
      }
    };
  }, [observerTarget, onScrollEnd]);

  return observerTarget;
};
