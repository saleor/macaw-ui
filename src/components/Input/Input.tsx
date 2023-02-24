import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";
import { classNames } from "~/utils";
import { Box } from "../Box";
import {
  input as inputStyle,
  span as spanStyle,
  label as labelStyle,
  InputVariants,
} from "./Input.css";

export type InputProps = InputVariants &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size"
  > & {
    children?: ReactNode;
    disabled?: boolean;
    label?: string;
    className?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      size,
      disabled = false,
      className,
      value,
      label,
      id,
      type,
      onChange,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [active, setActive] = useState(false);
    const typed = Boolean(inputValue || active);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(evt.target.value);

      if (onChange) {
        onChange(evt);
      }
    };

    const handleFocus = () => setActive(true);
    const handleBlur = () => setActive(false);

    return (
      <Box
        as="label"
        htmlFor={id}
        className={classNames(labelStyle({ typed, active, disabled, size }))}
      >
        <Box
          as="span"
          className={classNames(spanStyle({ typed, size, disabled }))}
        >
          {label}
        </Box>
        <Box
          id={id}
          as="input"
          type={type}
          className={classNames(inputStyle({ size }))}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
        {children}
      </Box>
    );
  }
);

Input.displayName = "Input";
