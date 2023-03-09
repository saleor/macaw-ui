import { InputHTMLAttributes } from "react";
import { AutosizeInput, InputContainer } from "./AutosizeInput";

type OperandTextProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "width" | "height" | "size"
> & {
  value?: string;
};

export const OperandText = (props: OperandTextProps) => {
  return (
    <InputContainer>
      <AutosizeInput type="text" {...props} />
    </InputContainer>
  );
};

OperandText.displayName = "Expression.OperandText";
