import { Item as DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

import { focusVisible } from "./common.css";

type ItemProps = {
  children: ReactNode;
};

export const Item = ({ children }: ItemProps) => {
  return (
    <DropdownMenuItem asChild className={focusVisible}>
      {children}
    </DropdownMenuItem>
  );
};

Item.displayName = "Dropdown.Item";
