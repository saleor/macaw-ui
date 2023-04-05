/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode, useState } from "react";
import {
  GetPropsCommonOptions,
  useCombobox,
  UseComboboxGetInputPropsOptions,
  UseComboboxPropGetters,
} from "downshift";

import { classNames } from "~/utils";

import { Box } from "../Box";
import { ArrowDownIcon } from "../Icons";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { icon } from "./Combobox.css";

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
    active,
    items,
    typed,
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps: (
      options?: UseComboboxGetInputPropsOptions,
      otherOptions?: GetPropsCommonOptions
    ) => getInputProps({ onFocus, onBlur, ...options }, otherOptions),
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
        labelRecipe({ typed, active, disabled, size, error }),
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
          className={classNames(spanRecipe({ typed, size, disabled, error }))}
        >
          {label}
        </Box>
        {children}
      </Box>

      <ArrowDownIcon className={icon} size={size} {...getToggleButtonProps()} />
    </Box>
  );
};

InputWrapper.displayName = "InputWrapper";
