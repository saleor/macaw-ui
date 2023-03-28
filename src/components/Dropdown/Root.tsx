import { Root as DropdownMenuRoot } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

export type DropdownRootProps = {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
};

export const DropdownRoot = ({ children, onOpenChange }: DropdownRootProps) => {
  return (
    <DropdownMenuRoot onOpenChange={onOpenChange}>{children}</DropdownMenuRoot>
  );
};
