import { useState, FocusEvent } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
  UseComboboxGetToggleButtonPropsOptions,
  useMultipleSelection,
} from "downshift7";

import { ChangeHandler, MultiselectOption } from "./types";

const getItemsFilter = (
  selectedItems: MultiselectOption[],
  inputValue: string,
  options: MultiselectOption[]
) => {
  const lowerCasedInputValue = inputValue?.toLowerCase();

  return options.filter(
    (option) =>
      !selectedItems.find(
        (selectedItem) => selectedItem.value === option.value
      ) && option.label.toLowerCase().includes(lowerCasedInputValue ?? "")
  );
};

export const useMultiselectEvents = (
  selectedItems: MultiselectOption[],
  options: MultiselectOption[],
  changeHandler?: ChangeHandler,
  disabled?: boolean,
  onInputValueChange?: (value: string) => void,
  onCustomFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void,
  onCustomBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void
) => {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);

  const itemsToSelect = getItemsFilter(selectedItems, inputValue, options);

  const showInput = onInputValueChange
    ? true
    : selectedItems.length !== options.length;

  const typed = Boolean(selectedItems.length || active);

  const { getSelectedItemProps, getDropdownProps, removeSelectedItem } =
    useMultipleSelection({
      selectedItems,
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            changeHandler?.(newSelectedItems ?? []);
            break;

          default:
            break;
        }
      },
    });

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    getToggleButtonProps,
  } = useCombobox({
    items: itemsToSelect,
    itemToString: (item) => item?.label ?? "",
    defaultHighlightedIndex: 0,
    selectedItem: null,
    stateReducer(_state, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          setInputValue("");
          return {
            ...changes,
            ...(changes.selectedItem && { isOpen: true, highlightedIndex: 0 }),
          };
        default:
          return changes;
      }
    },
    onStateChange({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (newSelectedItem) {
            changeHandler?.([...selectedItems, newSelectedItem]);
          } else {
            setInputValue("");
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          onInputValueChange?.(inputValue ?? "");
          setInputValue(newInputValue ?? "");
          break;

        default:
          break;
      }
    },
  });

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return {
    active,
    itemsToSelect,
    typed,
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps: (
      options?: UseComboboxGetInputPropsOptions,
      otherOptions?: GetPropsCommonOptions
    ) =>
      getInputProps(
        getDropdownProps({
          onFocus: (e: FocusEvent<HTMLInputElement, Element>) => {
            onCustomFocus?.(e);
            onFocus();
          },
          onBlur: (e: FocusEvent<HTMLInputElement, Element>) => {
            onCustomBlur?.(e);
            onBlur();
          },
          preventKeyAction: isOpen,
          ...options,
        }),
        otherOptions
      ),
    highlightedIndex,
    getItemProps,
    getSelectedItemProps,
    removeSelectedItem,
    selectedItems,
    inputValue,
    showInput,
    getToggleButtonProps: (
      options?: UseComboboxGetToggleButtonPropsOptions | undefined
    ) =>
      getToggleButtonProps({
        onClick: (event) => {
          event.preventDefault();
        },
        disabled,
        ...options,
      }),
    hasItemsToSelect: itemsToSelect.length > 0,
  };
};
