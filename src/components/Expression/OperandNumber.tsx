import { InputHTMLAttributes, ReactNode } from "react";
import { Box } from "../Box";
import { AutosizeInput, InputContainer } from "./AutosizeInput";
import { numberInputSign as numberInputSignStyles } from "./Expression.css";

interface SignProps {
  children: ReactNode;
}

export const Sign = ({ children }: SignProps) => (
  <Box className={numberInputSignStyles}>{children}</Box>
);
Sign.displayName = "Sign";

type OperandNumberProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "width" | "height" | "size"
> & {
  value?: string;
  sign?: string;
};

export const OperandNumber = ({ sign, ...props }: OperandNumberProps) => {
  return (
    <InputContainer focused>
      <Sign>{sign}</Sign>
      <AutosizeInput type="number" {...props} />
    </InputContainer>
  );
};

OperandNumber.displayName = "Expression.OperandNumber";
