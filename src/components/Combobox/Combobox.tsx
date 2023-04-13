import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "~/utils";

import { Option, ChangeHandler, useComboboxEvents } from "./useComboboxEvents";
import { ComboboxWrapper } from "./ComboboxWrapper";
import { List, Text, Box, PropsWithBox } from "..";
import { helperTextRecipe, inputRecipe, InputVariants } from "../BaseInput";
import { list, listItem, listWrapperRecipe } from "./Combobox.css";

export type ComboboxProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "color"
    | "width"
    | "height"
    | "size"
    | "type"
    | "children"
    | "onChange"
    | "value"
    | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number";
    helperText?: ReactNode;
    options: Option[];
    onChange?: ChangeHandler;
    value?: string;
  }
> &
  InputVariants;

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      size,
      disabled = false,
      className,
      value,
      label,
      id,
      type,
      error = false,
      helperText,
      options,
      onChange,
      ...props
    },
    ref
  ) => {
    const {
      active,
      typed,
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      items,
    } = useComboboxEvents(value, options, onChange);

    return (
      <Box display="flex" flexDirection="column" gap={3}>
        <ComboboxWrapper
          id={id}
          typed={typed}
          active={active}
          disabled={disabled}
          size={size}
          label={label}
          error={error}
          className={className}
          getLabelProps={getLabelProps}
          getToggleButtonProps={getToggleButtonProps}
        >
          <Box
            id={id}
            as="input"
            type={type}
            className={classNames(inputRecipe({ size, error }))}
            disabled={disabled}
            {...props}
            {...getInputProps({
              id,
              ref,
            })}
          />
        </ComboboxWrapper>

        <Box
          position="relative"
          display={isOpen ? "block" : "none"}
          className={listWrapperRecipe({ size })}
        >
          <List as="ul" className={list} {...getMenuProps()}>
            {isOpen &&
              items?.map((item, index) => (
                <List.Item
                  key={`${id}-${item}-${index}`}
                  className={listItem}
                  {...getItemProps({
                    item,
                    index,
                  })}
                  active={highlightedIndex === index}
                >
                  <Text size={size}>{item.label}</Text>
                </List.Item>
              ))}
          </List>
        </Box>

        {helperText && (
          <Box className={helperTextRecipe({ size })}>
            <Text
              variant="caption"
              size={size}
              color={error ? "textCriticalDefault" : "textNeutralSubdued"}
            >
              {helperText}
            </Text>
          </Box>
        )}
      </Box>
    );
  }
);

Combobox.displayName = "Combobox";
