import { ReactNode, useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
  UseComboboxGetToggleButtonPropsOptions,
  UseComboboxPropGetters,
  useMultipleSelection,
} from "downshift7";

export type ChangeHandler = (selectedItems: string[]) => void;
export type Option = { label: string; value: string };
export type RenderEndAdornmentType = (
  ...props: ReturnType<UseComboboxPropGetters<Option>["getToggleButtonProps"]>
) => ReactNode;

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
  selectedValues: string[],
  options: Option[],
  changeHandler?: ChangeHandler,
  disabled?: boolean,
  onAutocomplete?: (inputValue: string | undefined) => void
) => {
  const [inputValue, setInputValue] = useState("");
  const selectedItems = selectedValues.reduce<Option[]>((acc, value) => {
    const option = options.find((option) => option.value === value);
    if (option) {
      acc.push(option);
    }
    return acc;
  }, []);
  const itemsToSelect = getItemsFilter(selectedItems, inputValue, options);
  const [active, setActive] = useState(false);

  const typed = Boolean(selectedValues.length || active);

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
            changeHandler?.(newSelectedItems?.map((item) => item.value) ?? []);
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
            changeHandler?.([
              ...selectedItems.map((i) => i.value),
              newSelectedItem.value,
            ]);
          } else {
            setInputValue("");
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          if (
            onAutocomplete &&
            inputValue !== "" &&
            itemsToSelect.length === 0
          ) {
            onAutocomplete(inputValue);
          }
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
          onFocus,
          onBlur,
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
