import {
  AccordionMultipleProps,
  Root as AccordionRoot,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";
import { forwardRef, ReactNode } from "react";
import { Box, PropsWithBox } from "../Box";

export type AccordionRootProps = PropsWithBox<{
  children: ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}>;

export const Root = forwardRef<HTMLElement, AccordionRootProps>(
  (
    { children, defaultValue, value, onValueChange, type = "single", ...rest },
    ref
  ) => {
    const props =
      type === "single"
        ? ({
            type,
            collapsible: true,
            defaultValue,
            value,
            onValueChange,
          } as AccordionSingleProps)
        : ({
            type,
            defaultValue,
            value,
            onValueChange,
          } as AccordionMultipleProps);

    return (
      <AccordionRoot {...props} asChild>
        <Box {...rest} ref={ref} data-macaw-ui-component="Accordion">
          {children}
        </Box>
      </AccordionRoot>
    );
  }
);

Root.displayName = "Accordion";
