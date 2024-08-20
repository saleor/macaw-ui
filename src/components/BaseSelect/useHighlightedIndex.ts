import {
  useCombobox as useDownshiftCombobox,
  useSelect as useDownshiftSelect,
  UseComboboxStateChange,
  UseSelectStateChange,
} from "downshift";
import { useEffect, useState } from "react";

import { Option } from "~/components/BaseSelect";

export function useHighlightedIndex<T extends Option>(
  items: T[],
  selectedItem: T | null | undefined
): {
  highlightedIndex: number | undefined;
  setHighlightedIndex: (items: T[], selectedItem: T) => void;
  onHighlightedIndexChange: (
    change: UseComboboxStateChange<T> | UseSelectStateChange<T>
  ) => void;
} {
  // Initially we don't show any item as highlighted
  const [highlightedIndex, setHighlightedIndex] = useState<number | undefined>(
    -1
  );

  // When data from API comes we can calculate initial highlighted index
  // Or when we change selected item
  useEffect(() => {
    // If we don't have selected item leave highlighted index as -1
    if (!selectedItem) {
      return;
    }

    // Find highlighted index in items to select base on selected item value
    // If there is no match, leave highlighted index as -1
    setHighlightedIndex(getIndexToHighlight(items, selectedItem));
  }, [items, selectedItem]);

  const handleHighlightedIndexChange = ({
    type,
    highlightedIndex,
  }: UseComboboxStateChange<T> | UseSelectStateChange<T>) => {
    switch (type) {
      // Restore highlighted index to -1  when input value is changed and there is no selected item
      case useDownshiftCombobox.stateChangeTypes.InputChange:
        setHighlightedIndex(!selectedItem ? -1 : highlightedIndex);
        break;

      // Restore highlighted index to last selected item when leaving menu
      case useDownshiftCombobox.stateChangeTypes.MenuMouseLeave:
      case useDownshiftSelect.stateChangeTypes.MenuMouseLeave:
        setHighlightedIndex(
          selectedItem
            ? getIndexToHighlight(items, selectedItem)
            : highlightedIndex
        );
        break;
      case useDownshiftCombobox.stateChangeTypes.ItemClick:
      case useDownshiftSelect.stateChangeTypes.ItemClick:
      case useDownshiftCombobox.stateChangeTypes.ItemMouseMove:
      case useDownshiftSelect.stateChangeTypes.ItemMouseMove:
      case useDownshiftCombobox.stateChangeTypes.InputKeyDownArrowUp:
      case useDownshiftCombobox.stateChangeTypes.InputKeyDownArrowDown:
      case useDownshiftSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown:
      case useDownshiftSelect.stateChangeTypes.ToggleButtonKeyDownArrowUp:
        setHighlightedIndex(highlightedIndex);
        break;
    }
  };

  const handleSetHighlightedIndex = (items: T[], selectedItem: T) => {
    setHighlightedIndex(getIndexToHighlight(items, selectedItem));
  };

  return {
    highlightedIndex,
    setHighlightedIndex: handleSetHighlightedIndex,
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
