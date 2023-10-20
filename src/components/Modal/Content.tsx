import * as Dialog from "@radix-ui/react-dialog";
import { Box } from "../Box";

import { showContent } from "./Content.css";

export type ModalContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ModalContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild className={showContent}>
        <Box backgroundColor="highlightDim" position="fixed" inset={0}>
          <Dialog.Content asChild className={showContent}>
            {children}
          </Dialog.Content>
        </Box>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};

Content.displayName = "Modal.Content";
