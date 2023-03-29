import {
  Trigger as RadixPopoverTrigger,
  PopoverTriggerProps as RadixPopoverTriggerProps,
} from "@radix-ui/react-popover";

export type PopoverTriggerProps = RadixPopoverTriggerProps;

export const Trigger = ({ children, ...props }: PopoverTriggerProps) => {
  return <RadixPopoverTrigger {...props}>{children}</RadixPopoverTrigger>;
};
