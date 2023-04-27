import { useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift7";

type InputValue = string | undefined;
export type ChangeHandler = (selectedItem: string | null | undefined) => void;
export type Option = { label: string; value: string };

const getItemsFilter = (inputValue: InputValue, options: Option[]) => {
  if (!inputValue) {
    return options;
  }

  const lowerCasedInputValue = inputValue.toLowerCase();

  return options.filter((option) =>
    option.label.toLowerCase().includes(lowerCasedInputValue)
  );
};

export const useComboboxEvents = (
  value: InputValue,
  options: Option[],
  changeHandler?: ChangeHandler
) => {
  const [inputValue, setInputValue] = useState<InputValue>(value);
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
      changeHandler?.(selectedItem?.value);
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
