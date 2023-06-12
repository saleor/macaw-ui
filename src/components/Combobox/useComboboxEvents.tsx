import { FocusEvent, useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift7";

import { ChangeHandler, ComboboxOption } from "./types";

const getItemsFilter = (
  inputValue: string | undefined,
  options: ComboboxOption[]
) => {
  if (!inputValue) {
    return options;
  }

  const lowerCasedInputValue = inputValue.toString().toLowerCase();

  return options.filter((option) =>
    option.label.toLowerCase().includes(lowerCasedInputValue)
  );
};

export const useComboboxEvents = (
  selectedItem: ComboboxOption | null,
  options: ComboboxOption[],
  changeHandler?: ChangeHandler,
  onInputValueChange?: (value: string) => void,
  onCustomFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void,
  onCustomBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void
) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [active, setActive] = useState(false);
  const typed = Boolean(selectedItem || active);

  const itemsToSelect = getItemsFilter(inputValue, options);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: itemsToSelect,
    itemToString: (item) => item?.label ?? "",
    selectedItem,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        changeHandler?.(selectedItem);
      }
    },
    onInputValueChange: ({ inputValue = "" }) => {
      onInputValueChange?.(inputValue);
      setInputValue(inputValue);
    },
  });

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

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
      getInputProps(
        {
          onFocus: (e) => {
            onCustomFocus?.(e);
            onFocus();
          },
          onBlur: (e) => {
            onCustomBlur?.(e);
            onBlur();
          },
          ...options,
        },
        otherOptions
      ),
    highlightedIndex,
    getItemProps,
  };
};
