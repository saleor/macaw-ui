import { useVirtualizer } from "@tanstack/react-virtual";
import {
  GetPropsCommonOptions,
  UseComboboxGetInputPropsOptions,
  useCombobox as useDownshiftCombobox,
} from "downshift";
import { FocusEvent, useRef, useState } from "react";

import { Option, SingleChangeHandler } from "~/components/BaseSelect";
import { isString } from "~/utils";

const getItemsFilter = <T extends Option>(
  inputValue: string | undefined,
  options: T[]
) => {
  if (!inputValue) {
    return options;
  }

  const lowerCasedInputValue = inputValue.toString().toLowerCase();

  return options.filter((option) =>
    option.label.toLowerCase().includes(lowerCasedInputValue)
  );
};

export const useCombobox = <T extends Option, V extends string | Option>({
  selectedItem,
  options,
  onChange,
  onInputValueChange,
  onFocus,
  onBlur,
}: {
  selectedItem: T | null | undefined;
  options: T[];
  onChange?: SingleChangeHandler<V | null>;
  onInputValueChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [active, setActive] = useState(false);
  const typed = Boolean(selectedItem || active || inputValue);

  const itemsToSelect = getItemsFilter<T>(inputValue, options);

  const listRef = useRef<HTMLUListElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: itemsToSelect.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => 40,
    overscan: 2,
  });

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps: _getInputProps,
    highlightedIndex,
    getItemProps,
  } = useDownshiftCombobox({
    items: itemsToSelect,
    itemToString: (item) => item?.label ?? "",
    selectedItem,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        const selectedValue = isString(selectedItem)
          ? selectedItem.value
          : selectedItem;
        onChange?.(selectedValue as V);
      }
    },
    onHighlightedIndexChange({ highlightedIndex, type }) {
      if (type !== useDownshiftCombobox.stateChangeTypes.MenuMouseLeave) {
        rowVirtualizer.scrollToIndex(highlightedIndex ?? 0);
      }
    },
    onStateChange: ({ inputValue: newInputValue, type }) => {
      switch (type) {
        case useDownshiftCombobox.stateChangeTypes.InputChange:
          onInputValueChange?.(newInputValue ?? "");
          setInputValue(newInputValue ?? "");

          if (!newInputValue) {
            onChange?.(null);
          }
          break;
      }
    },
  });

  return {
    active,
    itemsToSelect,
    typed,
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps: (
      options?: UseComboboxGetInputPropsOptions,
      otherOptions?: GetPropsCommonOptions
    ) =>
      _getInputProps(
        {
          onFocus: (e) => {
            onFocus?.(e);
            setActive(true);
          },
          onBlur: (e) => {
            onBlur?.(e);
            setActive(false);
          },
          ...options,
        },
        otherOptions
      ),
    highlightedIndex,
    getItemProps,
    hasItemsToSelect: itemsToSelect.length > 0,
    rowVirtualizer,
    listRef,
  };
};
