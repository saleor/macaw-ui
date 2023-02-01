import { ReactNode } from "react";
import {
  Root as AccordionRoot,
  Item as AccordionItem,
} from "@radix-ui/react-accordion";

import { List } from "../List";

import { trigger } from "./common.css";

type ItemGroupRootProps = {
  children: ReactNode;
  defaultExpanded?: boolean;
  as?: "ul" | "ol";
  [key: `data-${string}`]: string;
};

const expandedValue = "list-item-group-value";

export const ItemGroupRoot = ({
  children,
  defaultExpanded = false,
  as = "ul",
  ...rest
}: ItemGroupRootProps) => (
  <AccordionRoot
    asChild
    type="single"
    collapsible
    defaultValue={defaultExpanded ? expandedValue : undefined}
  >
    <List as={as} {...rest}>
      <AccordionItem value={expandedValue} className={trigger}>
        {children}
      </AccordionItem>
    </List>
  </AccordionRoot>
);
