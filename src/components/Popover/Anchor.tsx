import {
  Anchor as RadixPopoverAnchor,
  PopoverAnchorProps as RadixPopoverAnchorProps,
} from "@radix-ui/react-popover";

export type PopoverAnchorProps = RadixPopoverAnchorProps;

export const Anchor = ({ children, ...props }: PopoverAnchorProps) => {
  return <RadixPopoverAnchor {...props}>{children}</RadixPopoverAnchor>;
};
