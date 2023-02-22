import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { Box, Button, ChervonDownIcon } from "~/components";
import { DataAttributes } from "~/components/types";

import { List } from "..";

import { button, icon } from "./common.css";

type ItemGroupTriggerProps = Sprinkles &
  DataAttributes & {
    children: ReactNode;
    active?: boolean;
    [key: `data-${string}`]: string;
    size?: "small" | "medium" | "large";
    url?: string;
  };

export const Trigger = ({
  children,
  size,
  url,
  ...rest
}: ItemGroupTriggerProps) => {
  return (
    <List.Item {...rest}>
      <Box textDecoration="none" as={url ? "a" : "span"} href={url}>
        {children}
      </Box>
      <AccordionTrigger asChild>
        <Button
          icon={
            <ChervonDownIcon
              className={icon}
              color="iconNeutralDefault"
              size={size}
            />
          }
          variant="tertiary"
          size={size}
          className={button}
        />
      </AccordionTrigger>
    </List.Item>
  );
};
