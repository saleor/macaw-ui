import { Root } from "@radix-ui/react-radio-group";
import { ReactNode } from "react";
import { Sprinkles } from "~/theme";
import { Box } from "../Box";

type RadioGroupItemProps = {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
} & Sprinkles;

export const RadioGroupRoot = ({
  children,
  className,
  defaultValue,
  ...rest
}: RadioGroupItemProps) => (
  <Root asChild defaultValue={defaultValue}>
    <Box {...rest} className={className}>
      {children}
    </Box>
  </Root>
);
