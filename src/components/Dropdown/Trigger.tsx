import { ReactNode } from "react";
import { Trigger as DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

import { focusVisible } from "./common.css";

type DropdownTriggerProps = {
  children: ReactNode;
};

export const Trigger = ({ children }: DropdownTriggerProps) => {
  return (
    <DropdownMenuTrigger asChild className={focusVisible}>
      {children}
    </DropdownMenuTrigger>
  );
};
