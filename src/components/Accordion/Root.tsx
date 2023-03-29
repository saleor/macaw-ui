import { Root as AccordionRoot } from "@radix-ui/react-accordion";
import { forwardRef, ReactNode } from "react";
import { Box, PropsWithBox } from "../Box";

export type AccordionRootProps = PropsWithBox<{
  children: ReactNode;
  defaultValue?: string;
}>;

export const Root = forwardRef<HTMLElement, AccordionRootProps>(
  ({ children, defaultValue, ...rest }, ref) => (
    <AccordionRoot
      type="single"
      collapsible
      defaultValue={defaultValue}
      asChild
    >
      <Box {...rest} ref={ref}>
        {children}
      </Box>
    </AccordionRoot>
  )
);

Root.displayName = "Accordion";
