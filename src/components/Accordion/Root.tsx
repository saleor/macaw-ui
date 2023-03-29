import {
  Root as AccordionRoot,
  Item as AccordionItem,
} from "@radix-ui/react-accordion";
import { ReactNode, useState } from "react";
import { trigger } from "./common.css";

export type AccordionProps = {
  children: ReactNode;
  defaultExpanded?: boolean;
};

const expandedValue = "accordion-value";

export const Root = ({ children, defaultExpanded = false }: AccordionProps) => {
  const [value, setValue] = useState(defaultExpanded ? expandedValue : "");

  return (
    <AccordionRoot
      asChild
      type="single"
      collapsible
      value={value}
      onValueChange={setValue}
    >
      <AccordionItem value={expandedValue} className={trigger}>
        {children}
      </AccordionItem>
    </AccordionRoot>
  );
};
