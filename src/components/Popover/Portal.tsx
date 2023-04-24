import { Portal as RadixPopoverPortal } from "@radix-ui/react-popover";

export interface PopoverPortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: PopoverPortalProps) => {
  return <RadixPopoverPortal>{children}</RadixPopoverPortal>;
};
