import { forwardRef, InputHTMLAttributes, ReactNode, FocusEvent } from "react";

import { classNames } from "~/utils";

import { InputWrapper, useStateEvents } from "./InputWrapper";
import { Box, PropsWithBox } from "../Box";
import { Text } from "../Text";
import { helperTextRecipe, inputRecipe, InputVariants } from "../BaseInput";

export type InputProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size" | "type" | "children" | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number" | "url" | "email" | "password";
    helperText?: ReactNode;
  }
> &
  InputVariants;

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
      onBlur,
      onFocus,
      flex,
      flexBasis,
      flexGrow,
      flexShrink,
      width,
      ...props
    },
    ref
  ) => {
    const {
      handlers,
      value: inputValue,
      active,
      typed,
    } = useStateEvents(value, onChange);

    return (
      <Box
        display="flex"
        flexDirection="column"
        flex={flex}
        flexBasis={flexBasis}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        width={width}
      >
        <InputWrapper
          id={id}
          typed={typed}
          active={active}
          disabled={disabled}
          size={size}
          label={label}
          error={error}
          className={className}
        >
          <Box
            id={id}
            as="input"
            type={type}
            className={classNames(inputRecipe({ size, error }))}
            disabled={disabled}
            value={inputValue}
            ref={ref}
            onBlur={(event: FocusEvent<HTMLInputElement, Element>) => {
              handlers.onBlur();
              onBlur?.(event);
            }}
            onFocus={(event: FocusEvent<HTMLInputElement, Element>) => {
              handlers.onFocus();
              onFocus?.(event);
            }}
            onChange={handlers.onChange}
            {...props}
          />
        </InputWrapper>
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

Input.displayName = "Input";
