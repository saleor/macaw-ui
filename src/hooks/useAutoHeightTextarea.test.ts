import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { useAutoHeightTextarea } from "./useAutoHeightTextarea";

describe("useAutoHeightTextarea", () => {
  let mockTextarea: HTMLTextAreaElement;
  let computedStyleMock: CSSStyleDeclaration;

  beforeEach(() => {
    // Create a mock textarea element
    mockTextarea = document.createElement("textarea");

    // Mock scrollHeight
    Object.defineProperty(mockTextarea, "scrollHeight", {
      configurable: true,
      get: () => 100,
    });

    // Mock getComputedStyle
    computedStyleMock = {
      lineHeight: "20px",
    } as CSSStyleDeclaration;

    vi.spyOn(window, "getComputedStyle").mockReturnValue(computedStyleMock);
  });

  describe("height calculation", () => {
    it("sets textarea height based on scrollHeight", () => {
      const ref = { current: mockTextarea };

      renderHook(() => useAutoHeightTextarea(ref, "test value", 1, 10));

      // Should set height to scrollHeight (capped by maxRows)
      expect(mockTextarea.style.height).toBe("100px");
    });

    it("respects minimum height based on rows prop", () => {
      // Set scrollHeight lower than rows * lineHeight
      Object.defineProperty(mockTextarea, "scrollHeight", {
        configurable: true,
        get: () => 30, // 30px scrollHeight
      });

      const ref = { current: mockTextarea };

      // rows=3 means minHeight = 3 * 20px = 60px
      renderHook(() => useAutoHeightTextarea(ref, "short", 3, 10));

      // Should use rows-based height (60px) since it's larger than scrollHeight (30px)
      expect(mockTextarea.style.height).toBe("60px");
    });

    it("respects maximum height based on maxRows prop", () => {
      // Set scrollHeight higher than maxRows * lineHeight
      Object.defineProperty(mockTextarea, "scrollHeight", {
        configurable: true,
        get: () => 500, // 500px scrollHeight
      });

      const ref = { current: mockTextarea };

      // maxRows=5 means maxHeight = 5 * 20px = 100px
      renderHook(() => useAutoHeightTextarea(ref, "very long text", 1, 5));

      // Should cap at maxRows height (100px)
      expect(mockTextarea.style.height).toBe("100px");
    });

    it("temporarily sets height to 0 to calculate correct scrollHeight", () => {
      const heightValues: string[] = [];

      // Track all height assignments
      Object.defineProperty(mockTextarea.style, "height", {
        configurable: true,
        set: (value: string) => {
          heightValues.push(value);
        },
        get: () => heightValues[heightValues.length - 1] || "",
      });

      const ref = { current: mockTextarea };

      renderHook(() => useAutoHeightTextarea(ref, "test", 1, 10));

      // First assignment should be "0px" to reset for measurement
      expect(heightValues[0]).toBe("0px");
      // Second assignment should be the calculated height
      expect(heightValues.length).toBe(2);
    });
  });

  describe("value changes", () => {
    it("recalculates height when value changes", () => {
      const ref = { current: mockTextarea };
      const heightValues: string[] = [];

      Object.defineProperty(mockTextarea.style, "height", {
        configurable: true,
        set: (value: string) => {
          heightValues.push(value);
        },
        get: () => heightValues[heightValues.length - 1] || "",
      });

      const { rerender } = renderHook(
        ({ value }) => useAutoHeightTextarea(ref, value, 1, 10),
        { initialProps: { value: "initial" } }
      );

      const initialAssignments = heightValues.length;

      // Change value
      rerender({ value: "new value that is longer" });

      // Should have more height assignments after value change
      expect(heightValues.length).toBeGreaterThan(initialAssignments);
    });
  });

  describe("rows and maxRows changes", () => {
    it("recalculates when rows prop changes", () => {
      const ref = { current: mockTextarea };

      Object.defineProperty(mockTextarea, "scrollHeight", {
        configurable: true,
        get: () => 30, // Low scrollHeight
      });

      const { rerender } = renderHook(
        ({ rows }) => useAutoHeightTextarea(ref, "test", rows, 10),
        { initialProps: { rows: 1 } }
      );

      // With rows=1, minHeight = 20px, scrollHeight = 30px, so height = 30px
      expect(mockTextarea.style.height).toBe("30px");

      // Change rows to 5
      rerender({ rows: 5 });

      // With rows=5, minHeight = 100px, scrollHeight = 30px, so height = 100px
      expect(mockTextarea.style.height).toBe("100px");
    });

    it("recalculates when maxRows prop changes", () => {
      const ref = { current: mockTextarea };

      Object.defineProperty(mockTextarea, "scrollHeight", {
        configurable: true,
        get: () => 200, // High scrollHeight
      });

      const { rerender } = renderHook(
        ({ maxRows }) => useAutoHeightTextarea(ref, "test", 1, maxRows),
        { initialProps: { maxRows: 10 } }
      );

      // With maxRows=10, maxHeight = 200px, scrollHeight = 200px, so height = 200px
      expect(mockTextarea.style.height).toBe("200px");

      // Change maxRows to 3
      rerender({ maxRows: 3 });

      // With maxRows=3, maxHeight = 60px, so height capped at 60px
      expect(mockTextarea.style.height).toBe("60px");
    });
  });

  describe("null ref handling", () => {
    it("handles null ref gracefully", () => {
      const ref = { current: null };

      // Should not throw
      expect(() => {
        renderHook(() => useAutoHeightTextarea(ref, "test", 1, 10));
      }).not.toThrow();
    });

    it("handles ref becoming available after initial render", () => {
      const ref: { current: HTMLTextAreaElement | null } = { current: null };

      const { rerender } = renderHook(
        ({ value }) => useAutoHeightTextarea(ref, value, 1, 10),
        { initialProps: { value: "initial" } }
      );

      // Initially null, should not set any height
      expect(mockTextarea.style.height).toBe("");

      // Ref becomes available
      ref.current = mockTextarea;

      // Trigger the effect by changing the value (which is in the dependency array)
      rerender({ value: "changed value" });

      // Now should calculate height
      expect(mockTextarea.style.height).toBe("100px");
    });
  });

  describe("edge cases", () => {
    it("handles empty string value", () => {
      const ref = { current: mockTextarea };

      renderHook(() => useAutoHeightTextarea(ref, "", 1, 10));

      // Should still calculate height
      expect(mockTextarea.style.height).toBeDefined();
    });

    it("handles undefined value", () => {
      const ref = { current: mockTextarea };

      renderHook(() => useAutoHeightTextarea(ref, undefined, 1, 10));

      // Should still calculate height
      expect(mockTextarea.style.height).toBeDefined();
    });

    it("handles rows equal to maxRows", () => {
      const ref = { current: mockTextarea };

      Object.defineProperty(mockTextarea, "scrollHeight", {
        configurable: true,
        get: () => 50,
      });

      renderHook(() => useAutoHeightTextarea(ref, "test", 5, 5));

      // Both rows and maxRows = 5, so height = 5 * 20px = 100px
      // But scrollHeight is 50, so max(100, 50) = 100, min(100, 100) = 100
      expect(mockTextarea.style.height).toBe("100px");
    });

    it("handles non-integer lineHeight", () => {
      computedStyleMock.lineHeight = "22.5px";

      const ref = { current: mockTextarea };

      Object.defineProperty(mockTextarea, "scrollHeight", {
        configurable: true,
        get: () => 50,
      });

      renderHook(() => useAutoHeightTextarea(ref, "test", 2, 10));

      // rows=2, lineHeight=22.5, so minHeight = 45px
      // scrollHeight = 50px, so max(45, 50) = 50px
      // maxRows=10, maxHeight=225px, so min(50, 225) = 50px
      expect(mockTextarea.style.height).toBe("50px");
    });
  });
});
