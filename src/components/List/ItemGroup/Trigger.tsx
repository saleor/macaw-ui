import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { ChervonDownIcon } from "~/components";

import { Item } from "../Item";

import { icon } from "./styles.css";

type ItemGroupTriggerProps = Pick<
  Sprinkles,
  "gap" | "paddingY" | "paddingX" | "borderRadius" | "justifyContent"
> & {
  children: ReactNode;
};

export const Trigger = ({ children, ...rest }: ItemGroupTriggerProps) => (
  <AccordionTrigger asChild>
    <Item {...rest}>
      {children}
      <ChervonDownIcon className={icon} borderRadius={2} />
    </Item>
  </AccordionTrigger>
);
