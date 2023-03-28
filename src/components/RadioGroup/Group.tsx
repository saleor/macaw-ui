import { Root } from "@radix-ui/react-radio-group";
import { forwardRef, ReactNode } from "react";

import { Box, PropsWithBox } from "../Box";
import { DataAttributes } from "../types";

export type RadioGroupRootProps = PropsWithBox<
  {
    children: ReactNode;
    className?: string;
    value?: string;
    onValueChange?: (value: string) => void;
  } & DataAttributes
>;

export const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupRootProps>(
  ({ children, className, value, onValueChange, ...rest }, ref) => (
    <Root asChild value={value} onValueChange={onValueChange}>
      <Box {...rest} className={className} ref={ref}>
        {children}
      </Box>
    </Root>
  )
);

RadioGroupRoot.displayName = "RadioGroup";
