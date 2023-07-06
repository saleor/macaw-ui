import { FocusEvent, useState } from "react";
import {
  GetPropsCommonOptions,
  UseSelectGetToggleButtonPropsOptions,
  useSelect as useDownshiftSelect,
} from "downshift7";

import { Option, SingleChangeHandler } from "../BaseSelect";

export const useSelect = <O extends Option>({
  value,
  options,
  onChange,
  onFocus,
  onBlur,
}: {
  value: O | null;
  options: O[];
  onChange?: SingleChangeHandler<O>;
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
    hasItemsToSelect: options.length > 0,
  };
};
