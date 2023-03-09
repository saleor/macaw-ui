import { forwardRef } from "react";
import { Dropdown, DropdownItem } from "./Dropdown";

interface ConditionItemProps {
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

interface ConditionProps {
  currentConditon: string;
  children: React.ReactNode;
}

export const Condition = ({ children, currentConditon }: ConditionProps) => (
  <Dropdown triggerText={currentConditon} variant="condition">
    {children}
  </Dropdown>
);

Condition.displayName = "Expression.Condition";
