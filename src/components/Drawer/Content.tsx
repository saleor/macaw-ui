import * as Dialog from "@radix-ui/react-dialog";
import { Sprinkles } from "~/theme";
import { Box } from "../Box";
import { CloseIcon } from "../Icons";

import { showContent } from "./Content.css";

type DrawerContentProps = Sprinkles & {
  children: React.ReactNode;
};

export const Content = ({ children, ...rest }: DrawerContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild className={showContent}>
        <Box backgroundColor="highlightDim" position="fixed" inset={0} />
      </Dialog.Overlay>
      <Dialog.Content asChild className={showContent}>
        <Box
          backgroundColor="surfaceNeutralPlain"
          boxShadow="modal"
          top={0}
          left={0}
          height="100%"
          borderTopRightRadius={3}
          borderBottomRightRadius={3}
          position="fixed"
          paddingTop={9}
          {...rest}
        >
          {children}
          <Dialog.Close asChild>
            {/* TODO: migrate to proper button */}
            <Box
              as="button"
              borderWidth={0}
              backgroundColor="interactiveNeutralHighlightDefault"
              position="absolute"
              top={0}
              right={0}
              cursor="pointer"
            >
              <CloseIcon />
            </Box>
          </Dialog.Close>
        </Box>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
