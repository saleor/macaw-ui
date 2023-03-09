import { InputHTMLAttributes, useRef } from "react";
import { useTextMetrics } from "./useTextMetrics";
import { Box } from "../../Box";
import {
  input as inputStyles,
  inputContainer as inputContainerStyles,
} from "../Expression.css";

type AutosizeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "width" | "height" | "size"
> & {
  value?: string;
  defaultWidth?: number;
  onCalculationChange?: ({
    left,
    rect,
  }: {
    left: number;
    rect: DOMRect;
  }) => void;
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
  defaultWidth = 71,
  onChange,
  onCalculationChange,
  type = "text",
  ...props
}: AutosizeInputProps) => {
  const inputRef = useRef();
  const { measureText } = useTextMetrics(inputRef);
  const currentTextWidth = measureText(value || "");
  const width =
    currentTextWidth > defaultWidth ? currentTextWidth : defaultWidth;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onCalculationChange) {
      const { value, selectionStart } = event.target;
      const rect = event.target.getBoundingClientRect();

      onCalculationChange({
        left: selectionStart
          ? measureText(value.slice(0, selectionStart), {
              includePaddings: false,
            })
          : 0,
        rect,
      });
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
      __width={`${width}px`}
      {...props}
    />
  );
};

AutosizeInput.displayName = "AutosizeInput";
