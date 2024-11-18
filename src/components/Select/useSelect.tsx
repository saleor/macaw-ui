import {
  GetPropsCommonOptions,
  UseSelectGetToggleButtonPropsOptions,
  useSelect as useDownshiftSelect,
} from "downshift";
import { FocusEvent, useState } from "react";

import { Option, useHighlightedIndex } from "../BaseSelect";
import { SelectProps } from "./Select";

export const useSelect = <T extends Option, V extends string | Option>({
  value,
  isValuePassedAsString,
  options,
  onChange,
  onFocus,
  onBlur,
  useCalculatedHighlightIndex = true,
}: {
  value: T | null | undefined;
  isValuePassedAsString: boolean;
  options: T[];
  onChange?: SelectProps<T, V>["onChange"];
  useCalculatedHighlightIndex?: boolean;
  onFocus?: (e: FocusEvent<HTMLElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLElement, Element>) => void;
}) => {
  const [active, setActive] = useState(false);
  const typed = Boolean(value || active);
  const {
    highlightedIndex: calculatedHighlightIndex,
    onHighlightedIndexChange: onCalculatedHighlightIndexChange,
  } = useHighlightedIndex(options, value);

  const {
    isOpen,
    getToggleButtonProps: _getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    selectedItem,
    highlightedIndex: defaultHighlightIndex,
  } = useDownshiftSelect({
    items: options,
    selectedItem: value ?? null,
    isItemDisabled: (item) => item?.disabled ?? false,
    ...(useCalculatedHighlightIndex && {
      highlightedIndex: calculatedHighlightIndex,
      onHighlightedIndexChange: onCalculatedHighlightIndexChange,
    }),
    itemToString: (item) => item?.value ?? "",
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        const selectedValue = isValuePassedAsString
          ? selectedItem.value
          : selectedItem;
        onChange?.(selectedValue as V);
      }
    },
  });

  return {
    active,
    typed,
    isOpen,
    getToggleButtonProps: (
      options?: UseSelectGetToggleButtonPropsOptions | undefined,
      otherOptions?: GetPropsCommonOptions | undefined
    ) =>
      _getToggleButtonProps<{
        onFocus: (e: FocusEvent<HTMLInputElement>) => void;
        onBlur: (e: FocusEvent<HTMLInputElement>) => void;
      }>(
        {
          onFocus: (e) => {
            setActive(true);
            onFocus?.(e);
          },
          onBlur: (e) => {
            setActive(false);
            onBlur?.(e);
          },
          ...options,
        },
        otherOptions
      ),
    getLabelProps,
    getMenuProps,
    highlightedIndex: useCalculatedHighlightIndex
      ? calculatedHighlightIndex
      : defaultHighlightIndex,
    getItemProps,
    selectedItem,
    hasItemsToSelect: options.length > 0,
  };
};
