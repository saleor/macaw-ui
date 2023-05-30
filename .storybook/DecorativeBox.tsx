import { ReactNode } from "react";
import { Box } from "~/components";

interface DecorativeBoxProps {
  children: ReactNode;
}

export const DecorativeBox = ({ children }: DecorativeBoxProps) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    gap={0.5}
    borderStyle="solid"
    borderColor="neutralPlain"
    padding={2}
    borderRadius={4}
    alignItems="flex-start"
    __height="fit-content"
  >
    {children}
  </Box>
);
