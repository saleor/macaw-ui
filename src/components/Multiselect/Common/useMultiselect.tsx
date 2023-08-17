import {
  GetPropsCommonOptions,
  UseComboboxGetInputPropsOptions,
  UseComboboxGetToggleButtonPropsOptions,
  UseComboboxPropGetters,
  useCombobox,
  useMultipleSelection,
} from "downshift7";
import { FocusEvent, ReactNode, useState } from "react";

import { MultiChangeHandler, Option } from "~/components/BaseSelect";
import { isStringArray } from "~/utils";

export type RenderEndAdornmentType = (
  ...props: ReturnType<UseComboboxPropGetters<Option>["getToggleButtonProps"]>
) => ReactNode;

const getItemsFilter = <T extends Option>(
  selectedItems: T[],
  inputValue: string,
  options: T[]
) => {
  const lowerCasedInputValue = inputValue?.toLowerCase();

  return options.filter(
    (option) =>
      !selectedItems.find(
        (selectedItem) => selectedItem.value === option.value
      ) && option.label.toLowerCase().includes(lowerCasedInputValue ?? "")
  );
};

export const useMultiselect = <T extends Option, V extends Option | string>({
  selectedValues,
  options,
  onChange,
  onInputValueChange,
  onFocus,
  onBlur,
}: {
  selectedValues: V[];
  options: T[];
  onChange?: MultiChangeHandler<V>;
  onInputValueChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const selectedItems = isStringArray(selectedValues)
    ? selectedValues.reduce<T[]>((acc, value) => {
        const option = options.find((option) => option.value === value);
        if (option) {
          acc.push(option);
        }
        return acc;
      }, [])
    : (selectedValues as unknown as T[]);

  const itemsToSelect = getItemsFilter<T>(selectedItems, inputValue, options);

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
          case useMultipleSelection.stateChangeTypes
            .FunctionRemoveSelectedItem: {
            const selected = isStringArray(selectedItems)
              ? newSelectedItems?.map((item) => item.value)
              : newSelectedItems;
            onChange?.(selected as V[]);
            break;
          }

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
            const selected = isStringArray(selectedItems)
              ? [...selectedItems.map((i) => i.value), newSelectedItem.value]
              : [...selectedItems, newSelectedItem];
            onChange?.(selected as V[]);
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
