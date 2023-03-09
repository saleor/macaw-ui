import { Dropdown, DropdownItem, DropdownProps } from "./Dropdown";

type OperandDropdownProps = Omit<DropdownProps, "variant">;

export const OperantDropdownItem = DropdownItem;
OperantDropdownItem.displayName = "OperantDropdownItem";

export const OperandDropdown = (props: OperandDropdownProps) => (
  <Dropdown {...props} variant="operand" />
);
OperandDropdown.displayName = "Expression.OperandDropdown";
