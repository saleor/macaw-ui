import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { useFloating } from "./useFloating";

describe("useFloating", () => {
  describe("return values", () => {
    it("returns setReferenceRef callback", () => {
      const { result } = renderHook(() => useFloating({ shouldUpdate: false }));

      expect(result.current.setReferenceRef).toBeDefined();
      expect(typeof result.current.setReferenceRef).toBe("function");
    });

    it("returns setFloatingRef callback", () => {
      const { result } = renderHook(() => useFloating({ shouldUpdate: false }));

      expect(result.current.setFloatingRef).toBeDefined();
      expect(typeof result.current.setFloatingRef).toBe("function");
    });

    it("returns floatingStyles object", () => {
      const { result } = renderHook(() => useFloating({ shouldUpdate: false }));

      expect(result.current.floatingStyles).toBeDefined();
      expect(typeof result.current.floatingStyles).toBe("object");
    });
  });

  describe("floatingStyles", () => {
    it("includes default zIndex of 2", () => {
      const { result } = renderHook(() => useFloating({ shouldUpdate: false }));

      expect(result.current.floatingStyles.zIndex).toBe(2);
    });

    it("uses custom zIndex when provided", () => {
      const { result } = renderHook(() =>
        useFloating({ shouldUpdate: false, zIndexValue: 10 })
      );

      expect(result.current.floatingStyles.zIndex).toBe(10);
    });

    it("includes pointerEvents auto", () => {
      const { result } = renderHook(() => useFloating({ shouldUpdate: false }));

      expect(result.current.floatingStyles.pointerEvents).toBe("auto");
    });

    it("includes position fixed", () => {
      const { result } = renderHook(() => useFloating({ shouldUpdate: false }));

      expect(result.current.floatingStyles.position).toBe("fixed");
    });
  });

  describe("ref callbacks", () => {
    it("setReferenceRef can be called with element", () => {
      const { result } = renderHook(() =>
        useFloating<HTMLDivElement>({ shouldUpdate: false })
      );

      const element = document.createElement("div");

      expect(() => {
        act(() => {
          result.current.setReferenceRef(element);
        });
      }).not.toThrow();
    });

    it("setReferenceRef can be called with null", () => {
      const { result } = renderHook(() =>
        useFloating<HTMLDivElement>({ shouldUpdate: false })
      );

      expect(() => {
        act(() => {
          result.current.setReferenceRef(null);
        });
      }).not.toThrow();
    });

    it("setFloatingRef can be called with element", () => {
      const { result } = renderHook(() =>
        useFloating<HTMLDivElement>({ shouldUpdate: false })
      );

      const element = document.createElement("div");

      expect(() => {
        act(() => {
          result.current.setFloatingRef(element);
        });
      }).not.toThrow();
    });

    it("setFloatingRef can be called with null", () => {
      const { result } = renderHook(() =>
        useFloating<HTMLDivElement>({ shouldUpdate: false })
      );

      expect(() => {
        act(() => {
          result.current.setFloatingRef(null);
        });
      }).not.toThrow();
    });
  });

  describe("shouldUpdate behavior", () => {
    it("does not throw when shouldUpdate is false", () => {
      expect(() => {
        renderHook(() => useFloating({ shouldUpdate: false }));
      }).not.toThrow();
    });

    it("does not throw when shouldUpdate is true without refs attached", () => {
      expect(() => {
        renderHook(() => useFloating({ shouldUpdate: true }));
      }).not.toThrow();
    });

    it("handles shouldUpdate changing from false to true", () => {
      const { rerender } = renderHook(
        ({ shouldUpdate }) => useFloating({ shouldUpdate }),
        { initialProps: { shouldUpdate: false } }
      );

      expect(() => {
        rerender({ shouldUpdate: true });
      }).not.toThrow();
    });

    it("handles shouldUpdate changing from true to false", () => {
      const { rerender } = renderHook(
        ({ shouldUpdate }) => useFloating({ shouldUpdate }),
        { initialProps: { shouldUpdate: true } }
      );

      expect(() => {
        rerender({ shouldUpdate: false });
      }).not.toThrow();
    });
  });
});
