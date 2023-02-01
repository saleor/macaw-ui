import { ReactNode } from "react";
import {
  Root as AccordionRoot,
  Item as AccordionItem,
} from "@radix-ui/react-accordion";

import { DataAttributes } from "~/components/types";

import { List } from "../List";

import { trigger } from "./common.css";

type ItemGroupRootProps = DataAttributes & {
  children: ReactNode;
  defaultExpanded?: boolean;
  as?: "ul" | "ol";
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
