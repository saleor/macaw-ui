import { useState, FocusEvent, ReactNode } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
  UseComboboxGetToggleButtonPropsOptions,
  UseComboboxPropGetters,
  useMultipleSelection,
} from "downshift7";

import { Option } from "../BaseSelect";

export type ChangeHandler = (selectedItems: Option[]) => void;
export type RenderEndAdornmentType = (
  ...props: ReturnType<UseComboboxPropGetters<Option>["getToggleButtonProps"]>
) => ReactNode;

const getItemsFilter = (
  selectedItems: Option[],
  inputValue: string,
  options: Option[]
) => {
  const lowerCasedInputValue = inputValue?.toLowerCase();

  return options.filter(
    (option) =>
      !selectedItems.find(
        (selectedItem) => selectedItem.value === option.value
      ) && option.label.toLowerCase().includes(lowerCasedInputValue ?? "")
  );
};

export const useMultiselect = ({
  selectedItems,
  options,
  onChange,
  onInputValueChange,
  onFocus,
  onBlur,
}: {
  selectedItems: Option[];
  options: Option[];
  onChange?: ChangeHandler;
  onInputValueChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}) => {
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
            onChange?.(newSelectedItems ?? []);
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
    getInputProps: _getInputProps,
    highlightedIndex,
    getItemProps,
    getToggleButtonProps: _getToggleButtonProps,
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
            onChange?.([...selectedItems, newSelectedItem]);
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
      _getInputProps(
        getDropdownProps({
          onFocus: (e: FocusEvent<HTMLInputElement, Element>) => {
            setActive(true);
            onFocus?.(e);
          },
          onBlur: (e: FocusEvent<HTMLInputElement, Element>) => {
            setActive(false);
            onBlur?.(e);
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
      _getToggleButtonProps({
        onClick: (event) => {
          event.preventDefault();
        },
        ...options,
      }),
    hasItemsToSelect: itemsToSelect.length > 0,
  };
};
