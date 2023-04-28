import { useState } from "react";
import { useSelect } from "downshift7";

export type ChangeHandler = (selectedItem: string | number) => void;
export type Option = { label: string; value: string | number };

export const useSelectEvents = (
  value: string | number,
  options: Option[],
  changeHandler?: (selectedValue: string | number) => void
) => {
  const [active, setActive] = useState(false);
  const typed = Boolean(value || active);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useSelect({
    items: options,
    selectedItem: options.find((option) => option.value === value),
    itemToString: (item) => item?.label ?? "",
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        changeHandler?.(selectedItem.value);
      }
    },
  });

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return {
    active,
    typed,
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
    handlers: { onFocus, onBlur },
  };
};
