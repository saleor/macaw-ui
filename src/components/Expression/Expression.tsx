import { ReactNode } from "react";
import { OperandDropdown, OperantDropdownItem } from "./OperandDropdown";
import { AutocompleteItem, OperandAutocomplete } from "./OperandAutocomplete";
import { Condition, ConditionItem } from "./Condition";
import { OperandText } from "./OperandText";
import { OperandNumber } from "./OperandNumber";
import { OperandRange } from "./OperandRange";
import { Box } from "../Box";
import { expression as expressionStyles } from "./Expression.css";

interface ExpressionProps {
  children: ReactNode;
}

export const Expression = ({ children }: ExpressionProps) => {
  return <Box className={expressionStyles}>{children}</Box>;
};
Expression.displayName = "Expression";
Expression.OperandDropdown = OperandDropdown;
Expression.OperantDropdownItem = OperantDropdownItem;
Expression.OperandAutocomplete = OperandAutocomplete;
Expression.AutocompleteItem = AutocompleteItem;
Expression.Condition = Condition;
Expression.ConditionItem = ConditionItem;
Expression.OperandText = OperandText;
Expression.OperandNumber = OperandNumber;
Expression.OperandRange = OperandRange;
