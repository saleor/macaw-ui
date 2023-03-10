import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { forwardRef, ReactNode, useState, MouseEvent } from "react";
import { Box } from "../Box";
import {
  dropdownContent as dropdownContentStyles,
  dropdownItem as dropdownItemStyles,
  dropdownTrigger as dropdownTriggerStyles,
} from "./Expression.css";

export interface DropdownItemProps {
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
  condition?: boolean;
}

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ children, onClick, condition = false }, ref) => (
    <DropdownMenu.Item
      className={dropdownItemStyles({ condition })}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </DropdownMenu.Item>
  )
);

DropdownItem.displayName = "DropdownItem";

export interface DropdownProps {
  children: ReactNode;
  triggerText?: string;
  variant: "operand" | "condition";
}

export const Dropdown = ({ children, triggerText, variant }: DropdownProps) => {
  const [opened, setOpened] = useState(false);

  const handleOpenChange = (opened: boolean) => {
    setOpened(opened);
  };

  return (
    <DropdownMenu.Root onOpenChange={handleOpenChange}>
      {triggerText && (
        <DropdownMenu.Trigger
          className={dropdownTriggerStyles({ variant, opened })}
        >
          {triggerText}
        </DropdownMenu.Trigger>
      )}
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="start" asChild>
          <Box className={dropdownContentStyles} __minWidth="128px">
            {children}
          </Box>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

Dropdown.displayName = "Dropdown";
