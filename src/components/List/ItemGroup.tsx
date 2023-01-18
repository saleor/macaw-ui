import * as Accordion from "@radix-ui/react-accordion";
import { Sprinkles } from "~/theme";

import * as styles from "./ItemGroup.css";

import { List } from "./List";
import { Item } from "./Item";
import { Box } from "../Box";
import { ChervonDownIcon } from "../Icons";

type ItemGroupRootProps = {
  children: React.ReactNode;
  defaultExpanded?: boolean;
  as?: "ul" | "ol";
};

const expandedValue = "list-item-group-value";

const ItemGroupRoot = ({
  children,
  defaultExpanded = false,
  as = "ul",
}: ItemGroupRootProps) => (
  <Accordion.Root
    asChild
    type="single"
    collapsible
    defaultValue={defaultExpanded ? expandedValue : undefined}
  >
    <List as={as}>
      <Accordion.Item value={expandedValue} className={styles.trigger}>
        {children}
      </Accordion.Item>
    </List>
  </Accordion.Root>
);

type ItemGroupTriggerProps = Pick<
  Sprinkles,
  "gap" | "paddingY" | "paddingX"
> & {
  children: React.ReactNode;
};

const Trigger = ({ children, ...rest }: ItemGroupTriggerProps) => (
  <Accordion.AccordionTrigger asChild>
    <Item justifyContent="space-between">
      <Box {...rest} display="flex" alignItems="center">
        {children}
      </Box>
      <ChervonDownIcon className={styles.icon} />
    </Item>
  </Accordion.AccordionTrigger>
);

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.AccordionContent asChild>{children}</Accordion.AccordionContent>
  );
};

export const ItemGroup = Object.assign(ItemGroupRoot, { Trigger, Content });
