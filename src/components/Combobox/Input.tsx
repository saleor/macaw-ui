import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";

import { classNames } from "~/utils";

import { InputWrapper, useStateEvents } from "./InputWrapper";
import { Box } from "../Box";
import { Text } from "../Text";
import { input as inputStyle, InputVariants } from "./Input.css";
import { useCombobox, UseComboboxStateChange } from "downshift";
import { List } from "../List";

export type ComboboxProps = InputVariants &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size" | "type" | "children"
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number";
    helperText?: ReactNode;
    options?: string[];
    onChange: (changes: UseComboboxStateChange<string>) => void;
  };

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
      onChange,
      helperText,
      options,
      ...props
    },
    ref
  ) => {
    const {
      handlers,
      active,
      typed,
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      inputOptions,
    } = useStateEvents(value, options, onChange);

    return (
      <Box position="relative">
        <InputWrapper
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
          isOpen={isOpen}
        >
          <Box
            id={id}
            as="input"
            type={type}
            className={classNames(inputStyle({ size, error }))}
            disabled={disabled}
            {...props}
            {...getInputProps({
              ...handlers,
            })}
          />
        </InputWrapper>

        <List
          {...getMenuProps()}
          as="ul"
          position="absolute"
          backgroundColor="surfaceNeutralPlain"
          boxShadow="overlay"
          borderColor="neutralHighlight"
          __borderRadius="10px"
          padding={3}
          width="100%"
          __top="80px"
          left={0}
          __display={isOpen ? "block" : "none"}
        >
          {isOpen &&
            inputOptions?.map((item, index) => (
              <List.Item
                as="li"
                paddingX={5}
                paddingY={5}
                __borderRadius="6px"
                key={`${item}${index}`}
                backgroundColor={
                  highlightedIndex === index
                    ? "surfaceNeutralHighlight"
                    : "surfaceNeutralPlain"
                }
                {...getItemProps({
                  item,
                  index,
                })}
              >
                <Text size="large">{item}</Text>
              </List.Item>
            ))}
        </List>
      </Box>
    );
  }
);

Combobox.displayName = "Combobox";
