import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "~/utils";

import { InputWrapper, useStateEvents } from "./InputWrapper";
import { Box, PropsWithBox } from "../Box";
import { Text } from "../Text";
import { input as inputStyle, InputVariants } from "./Input.css";

export type InputProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size" | "type" | "children"
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number";
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
      <Box display="flex" flexDirection="column">
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
            className={classNames(inputStyle({ size, error }))}
            disabled={disabled}
            value={inputValue}
            ref={ref}
            {...handlers}
            {...props}
          />
        </InputWrapper>
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

Input.displayName = "Input";
