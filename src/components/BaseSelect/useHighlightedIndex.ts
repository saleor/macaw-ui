import {
  UseComboboxStateChangeTypes,
  UseSelectStateChangeTypes,
  useCombobox as useDownshiftCombobox,
  useSelect as useDownshiftSelect,
} from "downshift";
import { useEffect, useState } from "react";

import { Option } from "~/components/BaseSelect";

export function useHighlightedIndex<T extends Option>(
  items: T[],
  selectedItem: T | null | undefined
): {
  highlightedIndex: number | undefined;
  onHighlightedIndexChange: (
    index: number | undefined,
    type: UseComboboxStateChangeTypes | UseSelectStateChangeTypes
  ) => void;
} {
  // Initially we don't show any item as highlighted
  const [highlightedIndex, setHighlightedIndex] = useState<number | undefined>(
    -1
  );

  // When data from API comes we can calulate intial highlighted index
  // Or when we change selected item
  useEffect(() => {
    // If we don't have selected item leave highlighted index as -1
    if (!selectedItem) {
      return;
    }

    // Find hilighted index in items to select base on selected item value
    // If there is no match, leave highlighted index as -1
    setHighlightedIndex(getIndexToHighlight(items, selectedItem));
  }, [items, selectedItem]);

  const handleHighlightedIndexChange = (
    highlightedIndex: number | undefined,
    type: UseComboboxStateChangeTypes | UseSelectStateChangeTypes
  ) => {
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
        setHighlightedIndex(highlightedIndex);
        break;
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
