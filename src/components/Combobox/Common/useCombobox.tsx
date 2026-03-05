import {
  GetPropsCommonOptions,
  useCombobox as useDownshiftCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift";
import { FocusEvent, useState, KeyboardEvent } from "react";

import {
  Option,
  SingleChangeHandler,
  useHighlightedIndex,
} from "~/components/BaseSelect";

const CUSTOM_VALUE_SENTINEL = "__macaw_custom_value__";

export const isCustomValueOption = (item: Option): boolean =>
  item.value === CUSTOM_VALUE_SENTINEL;

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
  allowCustomValue,
  onCustomValueSubmit,
}: {
  selectedItem: T | null | undefined;
  options: T[];
  isValuePassedAsString: boolean;
  onChange?: SingleChangeHandler<V | null>;
  onInputValueChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  allowCustomValue?: boolean;
  onCustomValueSubmit?: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [active, setActive] = useState(false);
  const typed = Boolean(selectedItem || active || inputValue);

  const filteredItems = getItemsFilter<T>(inputValue, options);
  const hasFilteredItems = filteredItems.length > 0;
  const trimmedInputValue = inputValue.trim();

  const canSubmitCustomValue =
    !!allowCustomValue &&
    !hasFilteredItems &&
    trimmedInputValue.length > 0 &&
    !!onCustomValueSubmit;

  const customValueOption = canSubmitCustomValue
    ? ({ label: trimmedInputValue, value: CUSTOM_VALUE_SENTINEL } as T)
    : null;

  const itemsToSelect = customValueOption
    ? [...filteredItems, customValueOption]
    : filteredItems;

  const hasItemsToSelect = itemsToSelect.length > 0;

  const { highlightedIndex, onHighlightedIndexChange } = useHighlightedIndex(
    itemsToSelect,
    selectedItem
  );

  const {
    isOpen,
    selectItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps: _getInputProps,
    getItemProps,
  } = useDownshiftCombobox({
    items: itemsToSelect,
    inputValue,
    itemToString: (item) => item?.label ?? "",
    selectedItem,
    highlightedIndex,
    onHighlightedIndexChange,
    isItemDisabled: (item) => item?.disabled ?? false,
    onInputValueChange({ inputValue, selectedItem }) {
      // It's happened because onInputValueChange is called when user selects item from a list,
      // and we don't want to show filtered items in the list when user selects item
      if (inputValue === selectedItem?.label) {
        return;
      }

      onInputValueChange?.(inputValue ?? "");
      setInputValue(inputValue ?? "");

      if (!inputValue) {
        onChange?.(null);
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) return;

      if (selectedItem.value === CUSTOM_VALUE_SENTINEL) {
        onCustomValueSubmit?.(trimmedInputValue);
        setInputValue("");
        return;
      }

      const selectedValue = isValuePassedAsString
        ? selectedItem.value
        : selectedItem;
      setInputValue("");
      onChange?.(selectedValue as V);
    },
  });

  return {
    active,
    itemsToSelect,
    inputValue: trimmedInputValue,
    typed,
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps: (
      options?: UseComboboxGetInputPropsOptions,
      otherOptions?: GetPropsCommonOptions
    ) =>
      _getInputProps<{
        onFocus: (e: FocusEvent<HTMLInputElement>) => void;
        onBlur: (e: FocusEvent<HTMLInputElement>) => void;
        onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
      }>(
        {
          onFocus: (e) => {
            onFocus?.(e);
            setActive(true);
          },
          onBlur: (e) => {
            onBlur?.(e);
            setActive(false);
          },
          onKeyDown: (e) => {
            if (
              e.key === "Enter" &&
              canSubmitCustomValue &&
              customValueOption &&
              highlightedIndex === -1
            ) {
              selectItem(customValueOption);
            }
          },
          ...options,
        },
        otherOptions
      ),
    highlightedIndex,
    getItemProps,
    hasItemsToSelect,
  };
};
