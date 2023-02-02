import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { Button, ChervonDownIcon } from "~/components";
import { DataAttributes } from "~/components/types";

import { List } from "..";

import { button, icon } from "./common.css";

type ItemGroupTriggerProps = Sprinkles &
  DataAttributes & {
    children: ReactNode;
    active?: boolean;
    [key: `data-${string}`]: string;
    size?: "small" | "medium" | "large";
  };

export const Trigger = ({ children, size, ...rest }: ItemGroupTriggerProps) => (
  <AccordionTrigger asChild>
    {/* Importing List.Item instead of Item fixes vite HMR */}
    <List.Item {...rest}>
      {children}
      <Button
        icon={<ChervonDownIcon className={icon} color="iconNeutralDefault" />}
        variant="tertiary"
        size={size}
        className={button}
      />
    </List.Item>
  </AccordionTrigger>
);
