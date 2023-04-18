import { InputHTMLAttributes, ChangeEvent } from "react";
import { AutosizeInput, InputContainer } from "./AutosizeInput";
import { Sign } from "./OperandNumber";
import { Box } from "../Box";
import { rangeItem as rangeItemStyles } from "./Expression.css";

type OperandRangeProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "width" | "height" | "size" | "value"
> & {
  from?: string;
  to?: string;
  placeholderFrom?: string;
  placeholderTo?: string;
  onFromChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onToChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  sign?: string;
};

export const OperandRange = ({
  from,
  to,
  onFromChange,
  onToChange,
  placeholderFrom,
  placeholderTo,
  sign,
}: OperandRangeProps) => {
  return (
    <InputContainer focused={false}>
      <Box className={rangeItemStyles}>
        <Sign>{sign}</Sign>
        <AutosizeInput
          defaultWidth={45}
          type="number"
          value={from}
          onChange={onFromChange}
          placeholder={placeholderFrom}
        />
      </Box>
      <Box as="span">-</Box>
      <Box className={rangeItemStyles}>
        <Sign>{sign}</Sign>
        <AutosizeInput
          defaultWidth={45}
          type="number"
          value={to}
          onChange={onToChange}
          placeholder={placeholderTo}
        />
      </Box>
    </InputContainer>
  );
};

OperandRange.displayName = "Expression.OperandRange";
