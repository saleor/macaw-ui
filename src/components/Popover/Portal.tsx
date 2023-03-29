import {
  Portal as RadixPopoverPortal,
  PopoverPortalProps as RadixPopoverPortalProps,
} from "@radix-ui/react-popover";

export type PopoverPortalProps = RadixPopoverPortalProps;

export const Portal = ({ children, ...props }: PopoverPortalProps) => {
  return <RadixPopoverPortal {...props}>{children}</RadixPopoverPortal>;
};
