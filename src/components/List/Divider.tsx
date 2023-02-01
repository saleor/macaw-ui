import { ReactNode } from "react";
import { Sprinkles } from "~/theme";

import { Box } from "../Box";
import { DataAttributes } from "../types";

type ListDividerProps = Sprinkles &
  DataAttributes & {
    children?: ReactNode;
  };

export const Divider = ({ children, ...rest }: ListDividerProps) => {
  return (
    <Box as="li" {...rest}>
      {children}
    </Box>
  );
};
