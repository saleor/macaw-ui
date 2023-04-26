import { useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
  useMultipleSelection,
} from "downshift7";

export type ChangeHandler = (
  selectedItems: Option[] | null | undefined
) => void;
export type Option = { label: string; value: string };

const getItemsFilter = (
  selectedItems: Option[],
  inputValue: string,
  options: Option[]
) => {
  const lowerCasedInputValue = inputValue?.toLowerCase();

  return options.filter((option) => {
    return (
      !selectedItems.includes(option) &&
      option.label.toLowerCase().includes(lowerCasedInputValue ?? "")
    );
  });
};

export const useMultiselectEvents = (
  defaultValue: Option[] = [],
  options: Option[],
  changeHandler?: ChangeHandler
) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<Option[]>(defaultValue);
  const items = getItemsFilter(selectedItems, inputValue, options);

  const [active, setActive] = useState(false);

  const typed = Boolean(selectedItems.length || active);

  const { getSelectedItemProps, getDropdownProps, removeSelectedItem } =
    useMultipleSelection({
      selectedItems,
      onSelectedItemsChange(changes) {
        changeHandler?.(changes.selectedItems);
      },
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
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
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
            setSelectedItems([...selectedItems, newSelectedItem]);
            changeHandler?.([...selectedItems, newSelectedItem]);
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
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
    items,
    typed,
    isOpen,
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
    inputValue,
  };
};
