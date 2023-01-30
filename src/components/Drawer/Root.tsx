import { Root as DialogRoot } from "@radix-ui/react-dialog";

type DrawerRootProps = {
  children: React.ReactNode;
};

export const Root = ({ children }: DrawerRootProps) => {
  return <DialogRoot>{children}</DialogRoot>;
};
