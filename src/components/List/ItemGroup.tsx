import * as Accordion from "@radix-ui/react-accordion";
import { Sprinkles } from "~/theme";

import * as styles from "./ItemGroup.css";

import { List } from "./List";
import { Item } from "./Item";
import { Box } from "../Box";
import { ChervonDownIcon } from "../Icons";

type ItemGroupProps = Pick<
  Sprinkles,
  "paddingX" | "paddingY" | "gap" | "justifyContent"
> & {
  children: React.ReactNode;
  defaultExpanded?: boolean;
  as?: "ul" | "ol";
  trigger: React.ReactNode;
};

const expandedValue = "list-item-group-value";

export const ItemGroup = ({
  children,
  trigger,
  defaultExpanded = false,
  as = "ul",
}: ItemGroupProps) => {
  return (
    <Accordion.Root
      asChild
      type="single"
      collapsible
      defaultValue={defaultExpanded ? expandedValue : undefined}
    >
      <List as={as}>
        <Accordion.Item value={expandedValue} className={styles.trigger}>
          <Accordion.AccordionTrigger asChild>
            <Item justifyContent="space-between">
              <Box display="flex" alignItems="center" gap={5}>
                {trigger}
              </Box>
              <ChervonDownIcon className={styles.icon} />
            </Item>
          </Accordion.AccordionTrigger>
          <Accordion.AccordionContent>{children}</Accordion.AccordionContent>
        </Accordion.Item>
      </List>
    </Accordion.Root>
  );
};
