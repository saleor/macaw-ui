import { Trigger as DialogTrigger } from "@radix-ui/react-dialog";

import { focusVisible } from "./common.css";

type DrawerTriggerProps = {
  children: React.ReactNode;
};

export const Trigger = ({ children }: DrawerTriggerProps) => {
  return (
    <DialogTrigger asChild className={focusVisible}>
      {children}
    </DialogTrigger>
  );
};
