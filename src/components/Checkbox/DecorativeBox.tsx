import { ReactNode } from "react";
import { Box } from "../Box";

interface DecorativeBoxProps {
  children: ReactNode;
}

export const DecorativeBox = ({ children }: DecorativeBoxProps) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    gap={2}
    borderStyle="solid"
    borderColor="neutralPlain"
    padding={5}
    borderRadius={4}
    alignItems="flex-start"
    __height="fit-content"
  >
    {children}
  </Box>
);
