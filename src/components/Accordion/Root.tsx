import {
  AccordionMultipleProps,
  Root as AccordionRoot,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";
import { forwardRef, ReactNode } from "react";
import { Box, PropsWithBox } from "../Box";

export type AccordionType = "single" | "multiple";

export type AccordionValue<T extends AccordionType> = T extends "single"
  ? string
  : string[];

export type AccordionRootProps<T extends AccordionType = "single"> =
  PropsWithBox<{
    children: ReactNode;
    type?: AccordionType;
    defaultValue?: AccordionValue<T>;
    value?: AccordionValue<T>;
    onValueChange?: (value: AccordionValue<T>) => void;
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
