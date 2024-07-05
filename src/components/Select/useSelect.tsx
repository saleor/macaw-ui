import {
  GetPropsCommonOptions,
  UseSelectGetToggleButtonPropsOptions,
  useSelect as useDownshiftSelect,
} from "downshift";
import { FocusEvent, ReactNode, useState } from "react";

import { Option, useSelectHighlightedIndex } from "../BaseSelect";
import { SelectProps } from "./Select";

export const useSelect = <
  T extends Option<ReactNode>,
  V extends string | Option,
>({
  value,
  isValuePassedAsString,
  options,
  onChange,
  onFocus,
  onBlur,
}: {
  value: T | null | undefined;
  isValuePassedAsString: boolean;
  options: T[];
  onChange?: SelectProps<T, V>["onChange"];
  onFocus?: (e: FocusEvent<HTMLElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLElement, Element>) => void;
}) => {
  const [active, setActive] = useState(false);
  const typed = Boolean(value || active);
  const { highlightedIndex, onHighlightedIndexChange } =
    useSelectHighlightedIndex(options, value);

  const {
    isOpen,
    getToggleButtonProps: _getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    selectedItem,
  } = useDownshiftSelect({
    items: options,
    selectedItem: value ?? null,
    highlightedIndex,
    onHighlightedIndexChange({ highlightedIndex, type }) {
      onHighlightedIndexChange(highlightedIndex, type);
    },
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
      _getToggleButtonProps(
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
    highlightedIndex,
    getItemProps,
    selectedItem,
    hasItemsToSelect: options.length > 0,
  };
};
