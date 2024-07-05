import {
  UseComboboxStateChangeTypes,
  UseSelectStateChangeTypes,
  useCombobox as useDownshiftCombobox,
  useSelect as useDownshiftSelect,
} from "downshift";
import { ReactNode, useEffect, useState } from "react";

import { Option } from "~/components/BaseSelect";

export function useHighlightedIndex<T extends Option>(
  items: T[],
  selectedItem: T | null | undefined
): {
  highlightedIndex: number | undefined;
  onHighlightedIndexChange: (
    index: number | undefined,
    type: UseComboboxStateChangeTypes
  ) => void;
} {
  // Inistiali we don't show any item as highlighted
  const [highlightedIndex, setHighlightedIndex] = useState<number | undefined>(
    -1
  );

  // We data from API comes we can calulate intial highlighted index
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
    type: UseComboboxStateChangeTypes
  ) => {
    switch (type) {
      case useDownshiftCombobox.stateChangeTypes.MenuMouseLeave:
        setHighlightedIndex(
          selectedItem
            ? getIndexToHighlight(items, selectedItem)
            : highlightedIndex
        );
        break;
      case useDownshiftCombobox.stateChangeTypes.ItemClick:
      case useDownshiftCombobox.stateChangeTypes.ItemMouseMove:
        setHighlightedIndex(highlightedIndex);
        break;
    }
  };

  return {
    highlightedIndex,
    onHighlightedIndexChange: handleHighlightedIndexChange,
  };
}

export function useSelectHighlightedIndex<T extends Option<ReactNode>>(
  items: T[],
  selectedItem: T | null | undefined
): {
  highlightedIndex: number | undefined;
  onHighlightedIndexChange: (
    index: number | undefined,
    type: UseSelectStateChangeTypes
  ) => void;
} {
  // Inistiali we don't show any item as highlighted
  const [highlightedIndex, setHighlightedIndex] = useState<number | undefined>(
    -1
  );

  // We data from API comes we can calulate intial highlighted index
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
    type: UseSelectStateChangeTypes
  ) => {
    switch (type) {
      case useDownshiftSelect.stateChangeTypes.MenuMouseLeave:
        setHighlightedIndex(
          selectedItem
            ? getIndexToHighlight(items, selectedItem)
            : highlightedIndex
        );
        break;
      case useDownshiftSelect.stateChangeTypes.ItemClick:
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

function getIndexToHighlight<T extends Option<ReactNode>>(
  items: T[],
  selectedItem: T
): number {
  if (typeof selectedItem === "string") {
    return items.findIndex((item) => item.value === selectedItem);
  }

  return items.findIndex((item) => item.value === selectedItem?.value);
}
