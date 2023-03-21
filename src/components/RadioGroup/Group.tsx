import { Root } from "@radix-ui/react-radio-group";
import { forwardRef, ReactNode } from "react";

import { Box, PropsWithBox } from "../Box";
import { DataAttributes } from "../types";

export type RadioGroupRootProps = PropsWithBox<
  {
    children: ReactNode;
    className?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  } & DataAttributes
>;

export const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupRootProps>(
  ({ children, className, defaultValue, onValueChange, ...rest }, ref) => (
    <Root asChild defaultValue={defaultValue} onValueChange={onValueChange}>
      <Box {...rest} className={className} ref={ref}>
        {children}
      </Box>
    </Root>
  )
);

RadioGroupRoot.displayName = "RadioGroup";
