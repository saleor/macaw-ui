import { Root as DialogRoot } from "@radix-ui/react-dialog";

export type ModalRootProps = {
  children: React.ReactNode;
};

export const Root = ({ children }: ModalRootProps) => {
  return <DialogRoot data-macaw-ui-component="Modal">{children}</DialogRoot>;
};

Root.displayName = "Modal";
