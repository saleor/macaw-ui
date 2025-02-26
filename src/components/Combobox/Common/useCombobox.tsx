import {
  GetPropsCommonOptions,
  useCombobox as useDownshiftCombobox,
  UseComboboxGetInputPropsOptions,
} from "downshift";
import { FocusEvent, useState } from "react";

import {
  Option,
  SingleChangeHandler,
  useHighlightedIndex,
} from "~/components/BaseSelect";

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
  const { highlightedIndex, onHighlightedIndexChange } = useHighlightedIndex(
    itemsToSelect,
    selectedItem
  );

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
    onHighlightedIndexChange,
    isItemDisabled: (item) => item?.disabled ?? false,
    onStateChange: ({ inputValue: newInputValue, type, selectedItem }) => {
      // eslint-disable-next-line no-console
      console.log("Debug useCombobox state change type", type);
      // eslint-disable-next-line no-console
      console.log("Debug useCombobox state change input value", inputValue);
      // eslint-disable-next-line no-console
      console.log(
        "Debug useCombobox state change new selected item",
        selectedItem
      );
      switch (type) {
        case useDownshiftCombobox.stateChangeTypes.InputKeyDownEnter:
        case useDownshiftCombobox.stateChangeTypes.ItemClick:
        case useDownshiftCombobox.stateChangeTypes.InputBlur:
          // eslint-disable-next-line no-console
          console.log("Start calling on change", selectedItem);
          if (selectedItem) {
            const selectedValue = isValuePassedAsString
              ? selectedItem.value
              : selectedItem;
            setInputValue("");
            // eslint-disable-next-line no-console
            console.log("Call on change");
            onChange?.(selectedValue as V);
          }
          break;
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
      _getInputProps<{
        onFocus: (e: FocusEvent<HTMLInputElement>) => void;
        onBlur: (e: FocusEvent<HTMLInputElement>) => void;
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
          ...options,
        },
        otherOptions
      ),
    highlightedIndex,
    getItemProps,
    hasItemsToSelect: itemsToSelect.length > 0,
  };
};
