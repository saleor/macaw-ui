import { InputHTMLAttributes, useEffect, useRef } from "react";
import { useTextMetrics } from "./useTextMetrics";
import { Box } from "../../Box";
import {
  input as inputStyles,
  inputContainer as inputContainerStyles,
} from "../Expression.css";

export interface CalculationChange {
  left: number;
  rect: DOMRect;
}

type AutosizeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "width" | "height" | "size"
> & {
  value?: string;
  defaultWidth?: number;
  onCalculationChange?: ({ left, rect }: CalculationChange) => void;
};

interface InputContainerProps {
  children: React.ReactNode;
  focused?: boolean;
}

export const InputContainer = ({
  children,
  focused = true,
}: InputContainerProps) => (
  <Box as="label" className={inputContainerStyles({ focused })}>
    {children}
  </Box>
);

InputContainer.displayName = "InputContainer";

export const AutosizeInput = ({
  value,
  placeholder,
  defaultWidth = 71,
  onChange,
  onCalculationChange,
  type = "text",
  ...props
}: AutosizeInputProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const { measureText, measureTextWithPaddings } = useTextMetrics(inputRef);

  useEffect(() => {
    if (!inputRef.current) return;
    const content = value || placeholder || "";
    const currentTextWidth = measureTextWithPaddings(content);
    const width =
      currentTextWidth > defaultWidth ? currentTextWidth : defaultWidth;

    inputRef.current.style.width = `${width}px`;
  }, [value, placeholder, defaultWidth, measureTextWithPaddings]);

  const calculateLeftPosition = (
    value: string,
    selectionStart: number | null
  ) => {
    if (!selectionStart) return 0;

    return measureText(value.slice(0, selectionStart));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onCalculationChange) {
      const { value, selectionStart } = event.target;
      const rect = event.target.getBoundingClientRect();
      const left = calculateLeftPosition(value, selectionStart);

      onCalculationChange({ left, rect });
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Box
      as="input"
      type={type}
      className={inputStyles({ isNumber: type === "number" })}
      ref={inputRef as unknown as React.Ref<HTMLInputElement>}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

AutosizeInput.displayName = "AutosizeInput";
