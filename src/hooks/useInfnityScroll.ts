import { useEffect, useRef } from "react";

export interface FetchMoreProps {
  hasMore: boolean;
  onFetchMore: () => void;
  loading?: boolean;
}

export const useInfnityScroll = (fetchMore: FetchMoreProps | undefined) => {
  const observerTarget = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!fetchMore || !observerTarget) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (fetchMore?.hasMore) {
            fetchMore?.onFetchMore();
          }
        }
      },
      { threshold: 1 }
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
  }, [fetchMore, observerTarget]);

  return observerTarget;
};
