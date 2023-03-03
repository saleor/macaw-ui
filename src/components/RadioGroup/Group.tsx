import { Root } from "@radix-ui/react-radio-group";
import { forwardRef, ReactNode } from "react";

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

export const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupItemProps>(
  ({ children, className, defaultValue, onValueChange, ...rest }, ref) => (
    <Root asChild defaultValue={defaultValue} onValueChange={onValueChange}>
      <Box {...rest} className={className} ref={ref}>
        {children}
      </Box>
    </Root>
  )
);

RadioGroupRoot.displayName = "RadioGroup";
