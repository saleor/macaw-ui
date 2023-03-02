import { Root } from "@radix-ui/react-radio-group";
import { ReactNode } from "react";
import { Box } from "../Box";

export const RadioGroupRoot = ({ children }: { children: ReactNode }) => (
  <Root asChild>
    <Box>{children}</Box>
  </Root>
);
