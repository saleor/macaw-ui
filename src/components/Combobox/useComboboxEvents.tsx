import { useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift7";

export type InputValue = string | number;
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
  changeHandler?: ChangeHandler
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
    itemToString: (item) => item?.label ?? "",
    selectedItem: options.find((option) => option.value === value) ?? null,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        changeHandler?.(selectedItem?.value);
      }
    },
    onInputValueChange: ({ inputValue }) => {
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
    ) => getInputProps({ onFocus, onBlur, ...options }, otherOptions),
    highlightedIndex,
    getItemProps,
  };
};
