import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import {
  dropdownContent as dropdownContentStyles,
  dropdownItem as dropdownItemStyles,
  dropdownTrigger as dropdownTriggerStyles,
  DropdownTriggerVariants,
} from "./Expression.css";

interface DropdownItemProps {
  children: ReactNode;
}

export const DropdownItem = ({ children }: DropdownItemProps) => (
  <DropdownMenu.Item className={dropdownItemStyles}>
    {children}
  </DropdownMenu.Item>
);

type DropdownProps = DropdownTriggerVariants & {
  children: ReactNode;
  triggerText?: string;
  open?: boolean;
};

export const Dropdown = ({ children, triggerText }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      {triggerText && (
        <DropdownMenu.Trigger
          className={dropdownTriggerStyles({ variant: "operand" })}
        >
          {triggerText}
        </DropdownMenu.Trigger>
      )}
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="start" className={dropdownContentStyles}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
