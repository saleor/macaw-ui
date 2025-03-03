import { Root as AccordionRoot } from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { Box, PropsWithBox } from "../Box";

interface SingleProps {
  type: "single";
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface MultipleProps {
  type: "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

export type AccordionRootProps = PropsWithBox<MultipleProps | SingleProps>;

export const Root = forwardRef<HTMLElement, AccordionRootProps>(
  ({ children, defaultValue, value, onValueChange, type, ...rest }, ref) => {
    const content = (
      <Box {...rest} ref={ref} data-macaw-ui-component="Accordion">
        {children}
      </Box>
    );

    if (type === "single") {
      return (
        <AccordionRoot
          collapsible
          type={type}
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          asChild
        >
          {content}
        </AccordionRoot>
      );
    }

    return (
      <AccordionRoot
        type={type}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        asChild
      >
        {content}
      </AccordionRoot>
    );
  }
);

Root.displayName = "Accordion";
