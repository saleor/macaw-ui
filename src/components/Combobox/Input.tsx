import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "~/utils";

import { InputWrapper, useStateEvents } from "./InputWrapper";
import { Box } from "../Box";
import { Text } from "../Text";
import { input as inputStyle, InputVariants } from "./Input.css";
import { Dropdown } from "../Dropdown";

export type InputProps = InputVariants &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size" | "type" | "children"
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number";
    helperText?: ReactNode;
  };

export const Combobox = forwardRef<HTMLInputElement, InputProps>(
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
      <Dropdown>
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
          <Dropdown.Trigger>
            <Box
              id={id}
              as="input"
              type={type}
              className={classNames(inputStyle({ size, error }))}
              disabled={disabled}
              value={inputValue}
              {...handlers}
              {...props}
            />
          </Dropdown.Trigger>
        </InputWrapper>
        <Dropdown.Content>
          <Dropdown.Item>
            <Box>Some item!</Box>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
  }
);

Combobox.displayName = "Combobox";
