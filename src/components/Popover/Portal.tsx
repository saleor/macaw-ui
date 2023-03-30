import { Portal as RadixPopoverPortal } from "@radix-ui/react-popover";

export interface PopoverPortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

export const Portal = ({ children, ...props }: PopoverPortalProps) => {
  return <RadixPopoverPortal {...props}>{children}</RadixPopoverPortal>;
};
