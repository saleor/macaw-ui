/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode, useState } from "react";
import { useCombobox, UseComboboxPropGetters } from "downshift";

import { Box } from "~/components/Box";
import { classNames } from "~/utils";
import { Button } from "../Button";
import { ArrowDownIcon } from "../Icons";
import {
  span as spanStyle,
  label as labelStyle,
  LabelVariants,
  button,
  trigger,
} from "./Combobox.css";

type InputValue = string | undefined;
export type ChangeHandler = (selectedItem: Option | null | undefined) => void;
export type Option = { label: string; value: string };

const getItemsFilter = (inputValue: string | undefined) => {
  if (!inputValue) {
    return () => false;
  }

  const lowerCasedInputValue = inputValue.toLowerCase();

  return (item: Option) =>
    !inputValue || item.label.toLowerCase().includes(lowerCasedInputValue);
};

export const useComboboxEvents = (
  value: InputValue,
  options: Option[],
  changeHandler?: ChangeHandler
) => {
  const [items, setItemOptions] = useState(options);
  const [active, setActive] = useState(false);
  const typed = Boolean(value || active);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    itemToString: (item) => item?.label ?? "",
    onSelectedItemChange: (changes) => {
      if (changeHandler) {
        changeHandler(changes.selectedItem);
      }
    },
    onInputValueChange: ({ inputValue }) => {
      if (!inputValue) {
        setItemOptions(options);
      } else {
        setItemOptions(items.filter(getItemsFilter(inputValue)));
      }
    },
    defaultInputValue: value,
  });

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return {
    handlers: { onFocus, onBlur },
    active,
    items,
    typed,
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  };
};

type InputWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  getLabelProps: UseComboboxPropGetters<Option>["getLabelProps"];
};

export const InputWrapper = ({
  id,
  label,
  className,
  error,
  children,
  getToggleButtonProps,
  getLabelProps,
  typed,
  active,
  disabled,
  size,
}: InputWrapperProps) => {
  return (
    <Box
      as="label"
      className={classNames(
        labelStyle({ typed, active, disabled, size, error }),
        className
      )}
      alignItems="center"
      justifyContent="space-between"
      disabled={disabled}
      {...getLabelProps({ htmlFor: id })}
    >
      <Box display="flex" flexDirection="column">
        <Box
          as="span"
          className={classNames(spanStyle({ typed, size, disabled, error }))}
        >
          {label}
        </Box>
        {children}
      </Box>

      <Button
        variant="tertiary"
        icon={<ArrowDownIcon className={button} />}
        type="button"
        aria-label="toggle menu"
        className={trigger}
        disabled={disabled}
        {...getToggleButtonProps()}
      />
    </Box>
  );
};

InputWrapper.displayName = "InputWrapper";
