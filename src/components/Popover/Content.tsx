import {
  Content as RadixPopoverContent,
  Portal as RadixPopoverPortal,
} from "@radix-ui/react-popover";
import { classNames } from "~/utils";
import { popover } from "./Popover.css";

export interface PopoverContentProps {
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  avoidCollisions?: boolean;
  children: React.ReactNode;
}

export const Content = ({
  children,
  className,
  ...props
}: PopoverContentProps) => {
  return (
    <RadixPopoverPortal>
      <RadixPopoverContent
        asChild
        className={classNames(popover, className)}
        {...props}
      >
        {children}
      </RadixPopoverContent>
    </RadixPopoverPortal>
  );
};

Content.displayName = "Popover.Content";
