import { Root as DropdownMenuRoot } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

export type DropdownRootProps = {
  children: ReactNode;
};

export const DropdownRoot = ({ children }: DropdownRootProps) => {
  return <DropdownMenuRoot>{children}</DropdownMenuRoot>;
};
