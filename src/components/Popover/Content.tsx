import {
  Content as RadixPopoverContent,
  PopoverContentProps as RadixPopoverContentProps,
} from "@radix-ui/react-popover";
import { classNames } from "~/utils";
import { popover } from "./Popover.css";

export type PopoverContentProps = RadixPopoverContentProps;

export const Content = ({
  children,
  className,
  ...props
}: PopoverContentProps) => {
  return (
    <RadixPopoverContent {...props} className={classNames(popover, className)}>
      {children}
    </RadixPopoverContent>
  );
};
