import {
  Root as DropdownMenuRoot,
  DropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";

export type DropdownRootProps = DropdownMenuProps;

export const DropdownRoot = ({ children, ...props }: DropdownRootProps) => {
  return <DropdownMenuRoot {...props}>{children}</DropdownMenuRoot>;
};
