import { FocusEvent, useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift7";

export type InputValue = string;
export type ChangeHandler = (selectedItem: InputValue) => void;
export type Option = { label: string; value: InputValue };

const getItemsFilter = (
  inputValue: InputValue | undefined,
  options: Option[]
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
  value: InputValue,
  options: Option[],
  changeHandler?: ChangeHandler,
  onInputValueChange?: (value: InputValue) => void,
  onCustomFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void,
  onCustomBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void
) => {
  const [inputValue, setInputValue] = useState<InputValue | undefined>(value);
  const [active, setActive] = useState(false);
  const typed = Boolean(value || active);
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
    itemToString: (item) => (item ? item.label : ""),
    defaultSelectedItem: options.find((option) => option.value === value),
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        changeHandler?.(selectedItem?.value);
      }
    },
    onInputValueChange: ({ inputValue }) => {
      onInputValueChange?.(inputValue ?? "");
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
