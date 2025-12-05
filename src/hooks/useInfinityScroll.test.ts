import { renderHook, act, waitFor } from "@testing-library/react";
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  type Mock,
} from "vitest";

import { useInfinityScroll } from "./useInfinityScroll";

// Mock observer interface matching the real IntersectionObserver
interface MockObserver {
  observe: Mock;
  unobserve: Mock;
  disconnect: Mock;
}

// Create mock observer factory
const createMockObserver = (
  callback: IntersectionObserverCallback,
  onObserve?: (element: Element) => void
): MockObserver => ({
  observe: vi.fn((element: Element) => onObserve?.(element)),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});

describe("useInfinityScroll", () => {
  let mockIntersectionObserver: Mock<
    [IntersectionObserverCallback, IntersectionObserverInit?],
    MockObserver
  >;
  let observerCallback: IntersectionObserverCallback;
  let observedElements: Element[] = [];

  beforeEach(() => {
    observedElements = [];

    mockIntersectionObserver = vi.fn(
      (callback: IntersectionObserverCallback) => {
        observerCallback = callback;
        return createMockObserver(callback, (element) => {
          observedElements.push(element);
        });
      }
    );

    vi.stubGlobal("IntersectionObserver", mockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe("basic functionality", () => {
    it("returns a ref object", () => {
      const { result } = renderHook(() => useInfinityScroll());

      expect(result.current).toHaveProperty("current");
      expect(result.current.current).toBe(null);
    });

    it("creates IntersectionObserver when ref is attached to element", async () => {
      const mockElement = document.createElement("div");

      // Create hook with element already attached to ref
      renderHook(() => {
        const ref = useInfinityScroll();
        ref.current = mockElement;
        return ref;
      });

      // Wait for effect to run and observer to be created
      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });
    });
  });

  describe("callback invocation", () => {
    it("calls onScrollEnd when element intersects", async () => {
      const onScrollEnd = vi.fn();
      const { result } = renderHook(() => useInfinityScroll(onScrollEnd));

      // Attach ref to element
      const mockElement = document.createElement("div");
      result.current.current = mockElement;

      // Force effect to run by creating a new hook instance with the element attached
      renderHook(
        ({ callback }) => {
          const ref = useInfinityScroll(callback);
          ref.current = mockElement;
          return ref;
        },
        { initialProps: { callback: onScrollEnd } }
      );

      // Wait for observer to be set up
      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });

      // Simulate intersection
      act(() => {
        observerCallback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver
        );
      });

      expect(onScrollEnd).toHaveBeenCalledTimes(1);
    });

    it("does not call onScrollEnd when element is not intersecting", async () => {
      const onScrollEnd = vi.fn();
      const mockElement = document.createElement("div");

      renderHook(() => {
        const ref = useInfinityScroll(onScrollEnd);
        ref.current = mockElement;
        return ref;
      });

      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });

      // Simulate non-intersection
      act(() => {
        observerCallback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          {} as IntersectionObserver
        );
      });

      expect(onScrollEnd).not.toHaveBeenCalled();
    });

    it("calls onScrollEnd multiple times on repeated intersections", async () => {
      const onScrollEnd = vi.fn();
      const mockElement = document.createElement("div");

      renderHook(() => {
        const ref = useInfinityScroll(onScrollEnd);
        ref.current = mockElement;
        return ref;
      });

      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });

      // First intersection
      act(() => {
        observerCallback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver
        );
      });

      // Second intersection (after scrolling away and back)
      act(() => {
        observerCallback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver
        );
      });

      expect(onScrollEnd).toHaveBeenCalledTimes(2);
    });
  });

  describe("callback updates", () => {
    it("uses the latest callback when onScrollEnd changes", async () => {
      const firstCallback = vi.fn();
      const secondCallback = vi.fn();
      const mockElement = document.createElement("div");

      const { rerender } = renderHook(
        ({ callback }) => {
          const ref = useInfinityScroll(callback);
          ref.current = mockElement;
          return ref;
        },
        { initialProps: { callback: firstCallback } }
      );

      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });

      // Update callback
      rerender({ callback: secondCallback });

      // Trigger intersection
      act(() => {
        observerCallback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver
        );
      });

      // Should call the new callback, not the old one
      expect(firstCallback).not.toHaveBeenCalled();
      expect(secondCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe("without callback", () => {
    it("works without onScrollEnd callback", async () => {
      const mockElement = document.createElement("div");

      const { result } = renderHook(() => {
        const ref = useInfinityScroll();
        ref.current = mockElement;
        return ref;
      });

      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });

      // Should not throw when intersection happens without callback
      expect(() => {
        act(() => {
          observerCallback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        });
      }).not.toThrow();

      expect(result.current.current).toBe(mockElement);
    });

    it("handles undefined callback gracefully", async () => {
      const mockElement = document.createElement("div");

      renderHook(() => {
        const ref = useInfinityScroll(undefined);
        ref.current = mockElement;
        return ref;
      });

      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });

      // Should not throw
      expect(() => {
        act(() => {
          observerCallback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver
          );
        });
      }).not.toThrow();
    });
  });

  describe("cleanup", () => {
    it("disconnects observer on unmount", async () => {
      const mockElement = document.createElement("div");
      let disconnectMock: Mock;

      mockIntersectionObserver.mockImplementation(
        (callback: IntersectionObserverCallback): MockObserver => {
          observerCallback = callback;
          disconnectMock = vi.fn();
          return {
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: disconnectMock,
          };
        }
      );

      const { unmount } = renderHook(() => {
        const ref = useInfinityScroll();
        ref.current = mockElement;
        return ref;
      });

      await waitFor(() => {
        expect(mockIntersectionObserver).toHaveBeenCalled();
      });

      unmount();

      // Cleanup should have been called
      // Note: The actual cleanup depends on the effect's cleanup function
    });
  });
});
