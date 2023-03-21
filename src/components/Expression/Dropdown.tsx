import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  forwardRef,
  ReactNode,
  useState,
  MouseEvent,
  ComponentProps,
} from "react";
import { Sprinkles } from "~/theme";
import { Box } from "../Box";
import {
  dropdownContent as dropdownContentStyles,
  dropdownItem as dropdownItemStyles,
  dropdownTrigger as dropdownTriggerStyles,
  dropdownContentScroller as dropdownContentScrollerStyles,
} from "./Expression.css";

type DropdownContentProps = ComponentProps<typeof Box> & {
  children: ReactNode;
  absolute?: boolean;
};

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, absolute = false, ...props }, ref) => {
    return (
      <Box ref={ref} {...props} className={dropdownContentStyles({ absolute })}>
        <Box
          className={dropdownContentScrollerStyles}
          __minWidth="128px"
          __maxHeight="150px"
        >
          {children}
        </Box>
      </Box>
    );
  }
);
DropdownContent.displayName = "DropdownContent";

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
          <DropdownContent>{children}</DropdownContent>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

Dropdown.displayName = "Dropdown";
