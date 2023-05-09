import { Anchor as RadixPopoverAnchor } from "@radix-ui/react-popover";

export interface PopoverAnchorProps {
  children: React.ReactNode;
}

export const Anchor = ({ children }: PopoverAnchorProps) => {
  return <RadixPopoverAnchor asChild>{children}</RadixPopoverAnchor>;
};

Anchor.displayName = "Popover.Anchor";
