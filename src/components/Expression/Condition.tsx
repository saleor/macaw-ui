import { forwardRef } from "react";
import { Dropdown, DropdownItem, DropdownItemProps } from "./Dropdown";

export interface ConditionItemProps
  extends Omit<DropdownItemProps, "condition"> {
  children: React.ReactNode;
}

export const ConditionItem = forwardRef<HTMLDivElement, ConditionItemProps>(
  ({ children, onClick }, ref) => (
    <DropdownItem ref={ref} onClick={onClick} condition>
      {children}
    </DropdownItem>
  )
);

ConditionItem.displayName = "ConditionItem";

export interface ConditionProps {
  currentConditon: string;
  children: React.ReactNode;
}

export const Condition = ({ children, currentConditon }: ConditionProps) => (
  <Dropdown triggerText={currentConditon} variant="condition">
    {children}
  </Dropdown>
);

Condition.displayName = "Expression.Condition";
