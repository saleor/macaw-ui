import {
  GetPropsCommonOptions,
  UseComboboxGetInputPropsOptions,
  useCombobox as useDownshiftCombobox,
} from "downshift";
import { FocusEvent, useState } from "react";

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
  const [active, setActive] = useState(false);
  const typed = Boolean(selectedItem || active || inputValue);

  const itemsToSelect = getItemsFilter<T>(inputValue, options);

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
        const selectedValue = isValuePassedAsString
          ? selectedItem.value
          : selectedItem;
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
