import {
  useCombobox,
  UseComboboxGetItemPropsOptions,
  useMultipleSelection,
} from "downshift";
import isEqual from "lodash/isEqual";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { SyntheticChangeEvent } from "../../types/utils";
import { Choice } from "../Filter";
import { useTextWidth } from "../tools/useTextWidth";
import { mergeRefs } from "../utils/mergeRefs";

export interface UseMultipleValueAutocomplete {
  choices: Choice[];
  enableReinitialize?: boolean;
  name?: string;
  initialValue: Choice[];
  onChange?: (event: SyntheticChangeEvent<string[]>) => void;
  onInputChange?: (value: string) => void;
  allowSelectAll?: boolean;
}

function useMultipleValueAutocomplete({
  choices,
  enableReinitialize,
  initialValue,
  name,
  onChange,
  onInputChange,
  allowSelectAll,
}: UseMultipleValueAutocomplete) {
  const anchor = useRef<HTMLDivElement>();
  const input = useRef<HTMLInputElement>();

  const [inputWidth, setInputText] = useTextWidth(
    window
      .getComputedStyle(input.current ?? document.body, null)
      .getPropertyValue("font")
  );

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    setSelectedItems,
    reset,
  } = useMultipleSelection({
    defaultSelectedItems: [],
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

  useEffect(() => {
    if (
      enableReinitialize &&
      !isEqual(initialValue, selectedItems) &&
      !allowSelectAll
    ) {
      setSelectedItems(initialValue);
    }
  }, [initialValue]);

  const selectAllItems = () => {
    if (allowSelectAll && choices && !areAllItemsSelected) {
      setSelectedItems(choices);
    } else {
      setSelectedItems([]);
    }
  };

  const areAllItemsSelected = useMemo(
    () => isEqual(choices, selectedItems),
    [selectedItems]
  );

  const removeAllItems = () => {
    reset();
  };

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
    circularNavigation: false,
    defaultHighlightedIndex: 0,
    items: choices,
    onInputValueChange: ({ inputValue }) => {
      setInputText(inputValue || "");
      if (onInputChange && inputValue) {
        onInputChange(inputValue);
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        if (
          selectedItems.map(({ value }) => value).includes(selectedItem.value)
        ) {
          setSelectedItems(
            selectedItems.filter(({ value }) => value !== selectedItem.value)
          );
        } else {
          addSelectedItem(selectedItem);
        }
        setInputValue("");
      }
    },
    stateReducer: (_, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          return {
            ...changes,
            // Since the choices don't disappear, the index needs to stay
            highlightedIndex: _.highlightedIndex,
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
    ...getDropdownProps(),
    onFocus: () => {
      if (!isOpen) {
        input.current?.select();
        openMenu();
      }
    },
  });
  const menuProps = getMenuProps({}, { suppressRefError: true });

  return {
    anchor,
    comboboxProps,
    getItemProps,
    getSelectedItemProps,
    getToggleButtonProps,
    highlightedIndex,
    inputProps,
    inputRef: mergeRefs(downshiftRef, input),
    inputValue,
    inputWidth,
    isOpen,
    labelProps,
    menuProps,
    ref: mergeRefs(comboboxDownshiftRef, anchor),
    removeSelectedItem,
    selectedItems,
    selectAllItems,
    areAllItemsSelected,
    removeAllItems,
  };
}

export default useMultipleValueAutocomplete;
