import { FocusEvent, useState } from "react";
import {
  GetPropsCommonOptions,
  UseSelectGetToggleButtonPropsOptions,
  useSelect as useDownshiftSelect,
} from "downshift7";

import { Option } from "../BaseSelect";

export type ChangeHandler = (selectedItem: Option) => void;

export const useSelect = ({
  value,
  options,
  onChange,
  onFocus,
  onBlur,
}: {
  value: Option;
  options: Option[];
  onChange?: (selectedValue: Option) => void;
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
    selectedItem: value,
    itemToString: (item) => item?.label ?? "",
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        onChange?.(selectedItem);
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
  };
};
