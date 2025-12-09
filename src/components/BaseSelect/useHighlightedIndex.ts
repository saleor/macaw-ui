import { UseComboboxStateChange, UseSelectStateChange } from "downshift";
import { useMemo, useState } from "react";

import { Option } from "~/components/BaseSelect";

export function useHighlightedIndex<T extends Option>(
  items: T[],
  selectedItem: T | null | undefined
): {
  highlightedIndex: number | undefined;
  onHighlightedIndexChange: (
    change: UseComboboxStateChange<T> | UseSelectStateChange<T>
  ) => void;
} {
  // Derive highlighted index from items and selectedItem
  // This automatically updates when items array changes (e.g., API data arrives)
  const derivedHighlightedIndex = useMemo(() => {
    if (!selectedItem) return -1;
    return getIndexToHighlight(items, selectedItem);
  }, [items, selectedItem]);

  // Track whether user has interacted with keyboard navigation
  // undefined means we should use the derived index
  const [userHighlightedIndex, setUserHighlightedIndex] = useState<
    number | undefined
  >(undefined);

  // Use user-set index if available, otherwise use derived index
  const highlightedIndex =
    userHighlightedIndex !== undefined
      ? userHighlightedIndex
      : derivedHighlightedIndex;

  const handleHighlightedIndexChange = ({
    highlightedIndex: newIndex,
  }: UseComboboxStateChange<T> | UseSelectStateChange<T>) => {
    if (selectedItem && newIndex === -1) {
      // When Downshift resets to -1, fall back to derived index
      setUserHighlightedIndex(undefined);
    } else {
      setUserHighlightedIndex(newIndex);
    }
  };

  return {
    highlightedIndex,
    onHighlightedIndexChange: handleHighlightedIndexChange,
  };
}

function getIndexToHighlight<T extends Option>(
  items: T[],
  selectedItem: T
): number {
  if (typeof selectedItem === "string") {
    return items.findIndex((item) => item.value === selectedItem);
  }

  return items.findIndex((item) => item.value === selectedItem?.value);
}
