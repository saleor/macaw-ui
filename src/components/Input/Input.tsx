import { FocusEvent, InputHTMLAttributes, ReactNode, forwardRef } from "react";

import { classNames } from "~/utils";

import { InputWrapper, useStateEvents } from "./InputWrapper";
import { InputVariants, helperTextRecipe, inputRecipe } from "../BaseInput";
import { Box, PropsWithBox } from "../Box";
import { Text } from "../Text";

export type InputProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size" | "type" | "children" | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number" | "url" | "email" | "password";
    helperText?: ReactNode;
    endAdornment?: ReactNode;
  }
> &
  InputVariants;

export const checkIfValidNumberInput = (event: any) => {
  // Check if input type number is valid as input type number doesn't currently work in browsers like Safari and Firefox
  // Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys
  const allowedCharacter =
    /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight|ArrowDown|ArrowUp)/;

  return !event.key.match(allowedCharacter) && event.preventDefault();
};

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
            onKeyDown={checkIfValidNumberInput}
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
