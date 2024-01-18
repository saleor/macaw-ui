import {
  GetPropsCommonOptions,
  UseSelectGetToggleButtonPropsOptions,
  useSelect as useDownshiftSelect,
} from "downshift";
import { FocusEvent, useState } from "react";

import { Option } from "../BaseSelect";
import { SelectProps } from "./Select";

export const useSelect = <T extends Option, V extends string | Option>({
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

  const {
    isOpen,
    getToggleButtonProps: _getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useDownshiftSelect({
    items: options,
    selectedItem: value ?? null,
    itemToString: (item) => item?.label ?? "",
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
