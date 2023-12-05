import * as Dialog from "@radix-ui/react-dialog";

import { Backdrop } from "../Backdrop";
import { showContent } from "./Content.css";

export type ModalContentProps = {
  children: React.ReactNode;
  disableAutofocus?: boolean;
};

const createAutofocusHandler = (isDisabled?: boolean) => {
  if (!isDisabled) return {};

  return {
    onOpenAutoFocus: (event: Event) => {
      event.preventDefault();
    },
  };
};

export const Content = ({ children, disableAutofocus }: ModalContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild className={showContent}>
        <Backdrop>
          <Dialog.Content
            asChild
            className={showContent}
            {...createAutofocusHandler(disableAutofocus)}
          >
            {children}
          </Dialog.Content>
        </Backdrop>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};

Content.displayName = "Modal.Content";
