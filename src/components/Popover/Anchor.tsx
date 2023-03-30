import { Anchor as RadixPopoverAnchor } from "@radix-ui/react-popover";

export interface PopoverAnchorProps {
  asChild?: boolean;
  children?: React.ReactNode;
}

export const Anchor = ({ asChild, children }: PopoverAnchorProps) => {
  return <RadixPopoverAnchor asChild={asChild}>{children}</RadixPopoverAnchor>;
};
