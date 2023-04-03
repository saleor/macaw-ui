/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode, forwardRef, useEffect, useState } from "react";
import { UseComboboxStateChange, useCombobox } from "downshift";
import { Box } from "~/components/Box";
import { classNames } from "~/utils";
import {
  span as spanStyle,
  label as labelStyle,
  LabelVariants,
} from "./Input.css";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { ArrowDownIcon, ArrowUpIcon } from "../Icons";

type InputValue = string | number | readonly string[] | undefined;
type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

export const useStateEvents = (
  value: InputValue,
  options: string[] | undefined = [],
  changeHandler?: (changes: any) => void
) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputOptions, setInputOptions] = useState(options);
  const [active, setActive] = useState(false);
  const typed = Boolean(inputValue || active);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputOptions,
    onSelectedItemChange: (changes) => {
      if (changeHandler) {
        changeHandler(changes.selectedItem);
      }
    },
    onInputValueChange: (changes) => {
      setInputValue(changes.inputValue);
      const selectedItems = options.filter((item) =>
        item.toLowerCase().startsWith(changes.inputValue?.toLowerCase() ?? "")
      );
      setInputOptions(selectedItems);
      if (changeHandler) {
        changeHandler(selectedItems);
      }
    },
  });

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return {
    handlers: { onFocus, onBlur },
    active,
    inputOptions,
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
  getToggleButtonProps: any;
  isOpen: any;
  getLabelProps: any;
};

export const InputWrapper = ({
  id,
  label,
  className,
  error,
  children,
  getToggleButtonProps,
  isOpen,
  getLabelProps,
  typed,
  active,
  disabled,
  size,
}: InputWrapperProps) => {
  return (
    <Box
      {...getLabelProps()}
      as="label"
      htmlFor={id}
      className={classNames(
        labelStyle({ typed, active, disabled, size, error }),
        className
      )}
      alignItems="center"
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
        // TODO: convert to data-state='open' & animate this
        icon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        type="button"
        aria-label="toggle menu"
        {...getToggleButtonProps()}
      />
    </Box>
  );
};

InputWrapper.displayName = "InputWrapper";
