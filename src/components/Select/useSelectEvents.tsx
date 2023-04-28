import { useState } from "react";
import { useSelect } from "downshift7";

export type ChangeHandler = (selectedItem: string | number) => void;
export type Option = { label: string; value: string };

export const useSelectEvents = (
  value: string | number,
  options: Option[],
  changeHandler?: ChangeHandler
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
    onFocus,
    onBlur,
    highlightedIndex,
    getItemProps,
    selectedItem,
  };
};
