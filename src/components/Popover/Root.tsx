import {
  Root as RadixPopoverRoot,
  PopoverProps as RadixPopoverProps,
} from "@radix-ui/react-popover";

export type PopoverProps = RadixPopoverProps;

export const PopoverRoot = ({ children, ...props }: PopoverProps) => {
  return <RadixPopoverRoot {...props}>{children}</RadixPopoverRoot>;
};
