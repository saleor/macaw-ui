import { Root } from "@radix-ui/react-radio-group";
import { ReactNode } from "react";

import { Sprinkles } from "~/theme";

import { Box } from "../Box";
import { DataAttributes } from "../types";

type RadioGroupItemProps = {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
} & Sprinkles &
  DataAttributes;

export const RadioGroupRoot = ({
  children,
  className,
  defaultValue,
  onValueChange,
  ...rest
}: RadioGroupItemProps) => (
  <Root asChild defaultValue={defaultValue} onValueChange={onValueChange}>
    <Box {...rest} className={className}>
      {children}
    </Box>
  </Root>
);
