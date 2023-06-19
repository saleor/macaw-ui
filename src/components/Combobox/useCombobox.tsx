import { FocusEvent, useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox as useDownshiftCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift7";
import { Option } from "../BaseSelect";

export type ChangeHandler = (selectedItem: Option) => void;

const getItemsFilter = (inputValue: string | undefined, options: Option[]) => {
  if (!inputValue) {
    return options;
  }

  const lowerCasedInputValue = inputValue.toString().toLowerCase();

  return options.filter((option) =>
    option.label.toLowerCase().includes(lowerCasedInputValue)
  );
};

export const useCombobox = ({
  selectedItem,
  options,
  onChange,
  onInputValueChange,
  onFocus,
  onBlur,
}: {
  selectedItem: Option | null;
  options: Option[];
  onChange?: ChangeHandler;
  onInputValueChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [active, setActive] = useState(false);
  const typed = Boolean(selectedItem || active);

  const itemsToSelect = getItemsFilter(inputValue, options);

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
        onChange?.(selectedItem);
      }
    },
    onStateChange: ({ inputValue: newInputValue, type }) => {
      switch (type) {
        case useDownshiftCombobox.stateChangeTypes.InputChange:
          onInputValueChange?.(inputValue ?? "");
          setInputValue(newInputValue ?? "");
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
