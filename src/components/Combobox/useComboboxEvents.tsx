import { useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift";

type InputValue = string | undefined;
export type ChangeHandler = (selectedItem: Option | null | undefined) => void;
export type Option = { label: string; value: string };

const getItemsFilter = (inputValue: InputValue) => {
  if (!inputValue) {
    return () => false;
  }

  const lowerCasedInputValue = inputValue.toLowerCase();

  return (item: Option) =>
    !inputValue || item.label.toLowerCase().includes(lowerCasedInputValue);
};

export const useComboboxEvents = (
  value: InputValue,
  options: Option[],
  changeHandler?: ChangeHandler
) => {
  const [inputValue, setInputValue] = useState(value);
  const [items, setItemOptions] = useState(options);
  const [active, setActive] = useState(false);
  const typed = Boolean(inputValue || active);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    itemToString: (item) => item?.label ?? "",
    onSelectedItemChange: (changes) => {
      if (changeHandler) {
        changeHandler(changes.selectedItem);
      }
    },
    onInputValueChange: ({ inputValue }) => {
      setInputValue(inputValue);
      if (!inputValue) {
        setItemOptions(options);
      } else {
        setItemOptions(items.filter(getItemsFilter(inputValue)));
      }
    },
    defaultInputValue: value,
  });

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return {
    active,
    items,
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
