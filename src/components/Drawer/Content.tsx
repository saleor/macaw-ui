import * as Dialog from "@radix-ui/react-dialog";
import { sprinkles, Sprinkles } from "~/theme";
import { Box } from "../Box";
import { Button } from "../Button";
import { CloseIcon } from "../Icons";

import { showContent } from "./Content.css";

type DrawerContentProps = Sprinkles & {
  children: React.ReactNode;
  [key: `data-${string}`]: string;
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
            <Button
              variant="tertiary"
              icon={<CloseIcon />}
              size="small"
              className={sprinkles({ position: "absolute", top: 3, right: 3 })}
            />
          </Dialog.Close>
        </Box>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
