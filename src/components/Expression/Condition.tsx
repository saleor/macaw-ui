import { forwardRef } from "react";
import { Dropdown, DropdownItem } from "./Dropdown";

export interface ConditionItemProps {
  children: React.ReactNode;
}

export const ConditionItem = forwardRef<HTMLDivElement, ConditionItemProps>(
  ({ children }, ref) => (
    <DropdownItem ref={ref} condition>
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
