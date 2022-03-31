import {
  useCombobox,
  UseComboboxGetItemPropsOptions,
  useMultipleSelection,
} from "downshift";
import { Ref, useCallback, useMemo, useRef } from "react";

import { SyntheticChangeEvent } from "../../types/utils";
import { Choice } from "../Filter";

function mergeRefs<T>(...refs: Ref<T>[]) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else {
        // ref.current is typed as readonly
        (ref as any).current = node;
      }
    }
  };
}

export interface UseMultipleValueAutocomplete {
  choices: Choice[];
  name?: string;
  initialValue: Choice[];
  onChange?: (event: SyntheticChangeEvent<string[]>) => void;
  onInputChange?: (value: string) => void;
}

function useMultipleValueAutocomplete({
  choices,
  initialValue,
  name,
  onChange,
  onInputChange,
}: UseMultipleValueAutocomplete) {
  const anchor = useRef<HTMLDivElement>();
  const input = useRef<HTMLInputElement>();

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({
    initialSelectedItems: initialValue,
    onSelectedItemsChange: ({ selectedItems }) => {
      if (onChange) {
        onChange({
          target: {
            name: name ?? "",
            value: selectedItems!.map((choice) => choice.value),
          },
        });
      }
    },
  });
  const filteredChoices = useMemo(
    () =>
      choices.filter(
        (choice) =>
          !selectedItems.find(
            (selectedChoice) => selectedChoice.value === choice.value
          )
      ),
    [choices, selectedItems]
  );
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps: baseGetItemProps,
    openMenu,
    inputValue,
    setInputValue,
    selectItem,
  } = useCombobox({
    defaultHighlightedIndex: 0,
    items: filteredChoices,
    onInputValueChange: ({ inputValue }) => {
      if (onInputChange) {
        onInputChange(inputValue ?? "");
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        addSelectedItem(selectedItem);
        setInputValue("");
      }
    },
    stateReducer: (_, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          const index = filteredChoices.findIndex(
            (choice) => choice.value === changes.selectedItem?.value
          );
          return {
            ...changes,
            highlightedIndex: index > 0 ? index - 1 : 0,
            isOpen: true,
          };
      }
      return changes;
    },
    selectedItem: null,
    itemToString: () => "",
  });

  // Downshift doesn't like portals like popper
  // https://github.com/downshift-js/downshift/issues/287
  const getItemProps = useCallback(
    (options: UseComboboxGetItemPropsOptions<Choice>) => {
      const baseProps = baseGetItemProps(options);

      return {
        ...baseProps,
        onClick: () => selectItem(options.item),
        selected: highlightedIndex === options.index,
      };
    },
    [baseGetItemProps, highlightedIndex]
  );

  const labelProps = getLabelProps();
  const { ref: comboboxDownshiftRef, ...comboboxProps } = getComboboxProps();
  const { ref: downshiftRef, ...inputProps } = getInputProps({
    ...getDropdownProps({ preventKeyAction: isOpen }),
    onFocus: () => {
      if (!isOpen) {
        input.current?.select();
        openMenu();
      }
    },
  });
  const menuProps = getMenuProps();

  return {
    anchor,
    comboboxProps,
    filteredChoices,
    getItemProps,
    getSelectedItemProps,
    getToggleButtonProps,
    highlightedIndex,
    inputProps,
    inputRef: mergeRefs(downshiftRef, input),
    inputValue,
    isOpen,
    labelProps,
    menuProps,
    ref: mergeRefs(comboboxDownshiftRef, anchor),
    removeSelectedItem,
    selectedItems,
  };
}

export default useMultipleValueAutocomplete;
