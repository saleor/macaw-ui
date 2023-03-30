import { Trigger as RadixPopoverTrigger } from "@radix-ui/react-popover";

export interface PopoverTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export const Trigger = ({ children, ...props }: PopoverTriggerProps) => {
  return <RadixPopoverTrigger {...props}>{children}</RadixPopoverTrigger>;
};
