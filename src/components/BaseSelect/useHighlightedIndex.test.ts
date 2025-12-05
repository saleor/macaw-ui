import { renderHook, act } from "@testing-library/react";
import { UseComboboxStateChange } from "downshift";
import { describe, it, expect } from "vitest";

import { useHighlightedIndex } from "./useHighlightedIndex";
import { Option } from "./types";

// Helper to create a state change object with just highlightedIndex
const createStateChange = (
  highlightedIndex: number
): UseComboboxStateChange<Option> =>
  ({ highlightedIndex }) as UseComboboxStateChange<Option>;

describe("useHighlightedIndex", () => {
  const createOptions = (count: number): Option[] =>
    Array.from({ length: count }, (_, i) => ({
      value: `value-${i}`,
      label: `Label ${i}`,
    }));

  describe("initial state", () => {
    it("returns -1 when selectedItem is null", () => {
      const items = createOptions(3);
      const { result } = renderHook(() => useHighlightedIndex(items, null));

      expect(result.current.highlightedIndex).toBe(-1);
    });

    it("returns -1 when selectedItem is undefined", () => {
      const items = createOptions(3);
      const { result } = renderHook(() =>
        useHighlightedIndex(items, undefined)
      );

      expect(result.current.highlightedIndex).toBe(-1);
    });

    it("returns -1 when items array is empty", () => {
      const { result } = renderHook(() =>
        useHighlightedIndex([], { value: "test", label: "Test" })
      );

      expect(result.current.highlightedIndex).toBe(-1);
    });
  });

  describe("with selectedItem", () => {
    it("returns the index of selectedItem in items array", () => {
      const items = createOptions(5);
      const selectedItem = items[2];

      const { result } = renderHook(() =>
        useHighlightedIndex(items, selectedItem)
      );

      expect(result.current.highlightedIndex).toBe(2);
    });

    it("returns -1 when selectedItem is not in items array", () => {
      const items = createOptions(3);
      const selectedItem = { value: "not-in-list", label: "Not Found" };

      const { result } = renderHook(() =>
        useHighlightedIndex(items, selectedItem)
      );

      expect(result.current.highlightedIndex).toBe(-1);
    });

    it("matches by value property, not by reference", () => {
      const items = createOptions(3);
      const selectedItem = { value: "value-1", label: "Different Label" };

      const { result } = renderHook(() =>
        useHighlightedIndex(items, selectedItem)
      );

      expect(result.current.highlightedIndex).toBe(1);
    });
  });

  describe("dynamic updates (API data arrives)", () => {
    it("updates highlighted index when items array changes", () => {
      const selectedItem = { value: "value-2", label: "Label 2" };

      // Start with empty items (simulating loading state)
      const { result, rerender } = renderHook(
        ({ items, selectedItem }) => useHighlightedIndex(items, selectedItem),
        { initialProps: { items: [] as Option[], selectedItem } }
      );

      expect(result.current.highlightedIndex).toBe(-1);

      // Items arrive from API
      const newItems = createOptions(5);
      rerender({ items: newItems, selectedItem });

      expect(result.current.highlightedIndex).toBe(2);
    });

    it("updates highlighted index when selectedItem changes", () => {
      const items = createOptions(5);

      const { result, rerender } = renderHook(
        ({ items, selectedItem }) => useHighlightedIndex(items, selectedItem),
        { initialProps: { items, selectedItem: items[1] } }
      );

      expect(result.current.highlightedIndex).toBe(1);

      // User selects a different item
      rerender({ items, selectedItem: items[3] });

      expect(result.current.highlightedIndex).toBe(3);
    });

    it("updates to -1 when selectedItem becomes null", () => {
      const items = createOptions(3);

      const { result, rerender } = renderHook(
        ({ items, selectedItem }) => useHighlightedIndex(items, selectedItem),
        { initialProps: { items, selectedItem: items[1] as Option | null } }
      );

      expect(result.current.highlightedIndex).toBe(1);

      rerender({ items, selectedItem: null });

      expect(result.current.highlightedIndex).toBe(-1);
    });
  });

  describe("onHighlightedIndexChange handler", () => {
    it("updates highlighted index when called with new index", () => {
      const items = createOptions(5);

      const { result } = renderHook(() => useHighlightedIndex(items, items[0]));

      expect(result.current.highlightedIndex).toBe(0);

      // Simulate keyboard navigation
      act(() => {
        result.current.onHighlightedIndexChange(createStateChange(3));
      });

      expect(result.current.highlightedIndex).toBe(3);
    });

    it("preserves user-set index across rerenders with same props", () => {
      const items = createOptions(5);

      const { result, rerender } = renderHook(
        ({ items, selectedItem }) => useHighlightedIndex(items, selectedItem),
        { initialProps: { items, selectedItem: items[0] } }
      );

      // User navigates to index 3
      act(() => {
        result.current.onHighlightedIndexChange(createStateChange(3));
      });

      expect(result.current.highlightedIndex).toBe(3);

      // Rerender with same props
      rerender({ items, selectedItem: items[0] });

      // User's choice should be preserved
      expect(result.current.highlightedIndex).toBe(3);
    });

    it("resets to derived index when handler is called with -1 and selectedItem exists", () => {
      const items = createOptions(5);
      const selectedItem = items[2];

      const { result } = renderHook(() =>
        useHighlightedIndex(items, selectedItem)
      );

      // User navigates to index 4
      act(() => {
        result.current.onHighlightedIndexChange(createStateChange(4));
      });

      expect(result.current.highlightedIndex).toBe(4);

      // Downshift resets to -1 (e.g., when menu closes and reopens)
      act(() => {
        result.current.onHighlightedIndexChange(createStateChange(-1));
      });

      // Should fall back to derived index (selectedItem's position)
      expect(result.current.highlightedIndex).toBe(2);
    });

    it("sets to -1 when handler is called with -1 and no selectedItem", () => {
      const items = createOptions(5);

      const { result } = renderHook(() => useHighlightedIndex(items, null));

      // User navigates to index 2
      act(() => {
        result.current.onHighlightedIndexChange(createStateChange(2));
      });

      expect(result.current.highlightedIndex).toBe(2);

      // Downshift resets to -1
      act(() => {
        result.current.onHighlightedIndexChange(createStateChange(-1));
      });

      // No selectedItem, so stays at -1
      expect(result.current.highlightedIndex).toBe(-1);
    });
  });

  describe("edge cases", () => {
    it("handles string selectedItem (for legacy compatibility)", () => {
      const items = createOptions(3);
      // TypeScript allows string as T extends Option, and code handles it
      const selectedItem = "value-1" as unknown as Option;

      const { result } = renderHook(() =>
        useHighlightedIndex(items, selectedItem)
      );

      expect(result.current.highlightedIndex).toBe(1);
    });

    it("handles items with duplicate values (returns first match)", () => {
      const items: Option[] = [
        { value: "a", label: "First A" },
        { value: "b", label: "B" },
        { value: "a", label: "Second A" },
      ];
      const selectedItem = { value: "a", label: "Any A" };

      const { result } = renderHook(() =>
        useHighlightedIndex(items, selectedItem)
      );

      // Should return index of first match
      expect(result.current.highlightedIndex).toBe(0);
    });
  });
});
