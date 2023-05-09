import { Root as RadixPopoverRoot } from "@radix-ui/react-popover";

export type PopoverProps = {
  className?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const PopoverRoot = ({ children, ...props }: PopoverProps) => {
  return <RadixPopoverRoot {...props}>{children}</RadixPopoverRoot>;
};

PopoverRoot.displayName = "Popover";
