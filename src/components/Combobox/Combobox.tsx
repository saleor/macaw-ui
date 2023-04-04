import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "~/utils";

import {
  ChangeHandler,
  InputWrapper,
  Option,
  useComboboxEvents,
} from "./ComboboxWrapper";
import { Box } from "../Box";
import { Text } from "../Text";
import { List } from "../List";
import { input as inputStyle, InputVariants } from "./Combobox.css";

export type ComboboxProps = InputVariants &
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
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number";
    helperText?: ReactNode;
    options: Option[];
    onChange?: ChangeHandler;
    value?: string;
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
      helperText,
      options,
      onChange,
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
      items,
    } = useComboboxEvents(value, options, onChange);

    return (
      <Box display="flex" flexDirection="column" gap={3}>
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
              id,
              ref,
            })}
          />
        </InputWrapper>

        <Box position="relative" display={isOpen ? "block" : "none"}>
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
            left={0}
            zIndex={3}
          >
            {isOpen &&
              items?.map((item, index) => (
                <List.Item
                  paddingX={5}
                  paddingY={5}
                  borderRadius={3}
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
                  <Text size={size}>{item.label}</Text>
                </List.Item>
              ))}
          </List>
        </Box>

        {helperText && (
          <Box paddingLeft={4}>
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
