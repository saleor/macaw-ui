import { useMemo, useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
  useMultipleSelection,
} from "downshift7";

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

export const useMultiselectEvents = (
  value: InputValue,
  options: Option[],
  changeHandler?: ChangeHandler
) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<Option[]>([]);
  const items = options;

  const [active, setActive] = useState(false);

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
            setSelectedItems(newSelectedItems ?? []);
            break;
          default:
            break;
        }
      },
    });

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
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
            highlightedIndex: 0, // with the first option highlighted.
          };
        default:
          return changes;
      }
    },
    selectedItem: null,
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
            setSelectedItems([...selectedItems, newSelectedItem]);
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInputValue ?? "");

          break;
        default:
          break;
      }
    },
    // onSelectedItemChange: (changes) => {
    //   if (changeHandler) {
    //     changeHandler(changes.selectedItem);
    //   }
    // },
    // onInputValueChange: ({ inputValue }) => {
    //   setInputValue(inputValue);
    //   if (!inputValue) {
    //     setItemOptions(options);
    //   } else {
    //     setItemOptions(items.filter(getItemsFilter(inputValue)));
    //   }
    // },
    // defaultInputValue: value,
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
    getSelectedItemProps,
    getDropdownProps,
    removeSelectedItem,
    selectedItems,
  };
};
