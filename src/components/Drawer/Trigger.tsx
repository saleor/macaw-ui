import { Trigger as DialogTrigger } from "@radix-ui/react-dialog";

type DrawerTriggerProps = {
  children: React.ReactNode;
};

export const Trigger = ({ children }: DrawerTriggerProps) => {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
};
