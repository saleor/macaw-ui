import {
  GetPropsCommonOptions,
  UseComboboxGetInputPropsOptions,
  useCombobox as useDownshiftCombobox,
} from "downshift";
import { FocusEvent, useEffect, useState } from "react";

import { Option, SingleChangeHandler } from "~/components/BaseSelect";

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
  isValuePassedAsString,
  onChange,
  onInputValueChange,
  onFocus,
  onBlur,
}: {
  selectedItem: T | null | undefined;
  options: T[];
  isValuePassedAsString: boolean;
  onChange?: SingleChangeHandler<V | null>;
  onInputValueChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [highlightedIndex, setHighlightedIndex] = useState<number | undefined>(
    -1
  );
  const [active, setActive] = useState(false);
  const typed = Boolean(selectedItem || active || inputValue);

  const itemsToSelect = getItemsFilter<T>(inputValue, options);

  useEffect(() => {
    // Skip when no selected item
    // if (!selectedItem || !highlightedIndex || highlightedIndex > -1) {
    if (!selectedItem) {
      return;
    }

    // Find hilighted index in items to select base on selected item value
    // or label. Label is used as fallback when API return  item value as Id
    const index = itemsToSelect.findIndex(
      (item) =>
        item.value === selectedItem?.value ||
        item.value === selectedItem?.label?.toLocaleLowerCase()
    );

    setHighlightedIndex(index);
  }, [itemsToSelect, selectedItem]);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps: _getInputProps,
    getItemProps,
  } = useDownshiftCombobox({
    items: itemsToSelect,
    itemToString: (item) => item?.label ?? "",
    selectedItem,
    highlightedIndex,
    onHighlightedIndexChange: ({ highlightedIndex }) => {
      setHighlightedIndex(highlightedIndex);
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        const selectedValue = isValuePassedAsString
          ? selectedItem.value
          : selectedItem;
        setInputValue("");
        onChange?.(selectedValue as V);
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
  };
};
