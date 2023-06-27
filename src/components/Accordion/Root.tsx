import { Root as AccordionRoot } from "@radix-ui/react-accordion";
import { forwardRef, ReactNode } from "react";
import { Box, PropsWithBox } from "../Box";

export type AccordionRootProps = PropsWithBox<{
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}>;

export const Root = forwardRef<HTMLElement, AccordionRootProps>(
  ({ children, defaultValue, value, onValueChange, ...rest }, ref) => (
    <AccordionRoot
      type="single"
      collapsible
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      asChild
    >
      <Box {...rest} ref={ref} data-macaw-ui-component="Accordion">
        {children}
      </Box>
    </AccordionRoot>
  )
);

Root.displayName = "Accordion";
