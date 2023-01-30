import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { Box, ChervonDownIcon } from "~/components";

import { List } from "..";

import { button, icon } from "./common.css";

type ItemGroupTriggerProps = Sprinkles & {
  children: ReactNode;
  active?: boolean;
};

export const Trigger = ({ children, ...rest }: ItemGroupTriggerProps) => (
  <AccordionTrigger asChild>
    {/* Importing List.Item instead of Item fixes vite HMR */}
    <List.Item {...rest}>
      {children}
      {/* TODO: use Button component when it will be ready at */}
      {/* https://github.com/saleor/saleor-dashboard/issues/3000 */}
      <Box
        as="button"
        borderRadius={2}
        backgroundColor="interactiveNeutralHighlightDefault"
        className={button}
        borderWidth={0}
      >
        <ChervonDownIcon className={icon} />
      </Box>
    </List.Item>
  </AccordionTrigger>
);
