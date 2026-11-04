"use client";

import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { ChevronDown } from "lucide-react";
import { Box, Button, PropsWithBox } from "~/components";
import { DataAttributes } from "~/components/types";
import { iconSizeMap } from "~/utils";

import { Item } from "../Item";
import { useItemGroupContext } from "./context";

import { button, icon } from "./common.css";
export type ItemGroupTriggerProps = PropsWithBox<
  DataAttributes & {
    children: ReactNode;
    active?: boolean;
    url?: string;
    size?: "small" | "medium" | "large";
  }
>;

export const Trigger = ({ children, size, ...rest }: ItemGroupTriggerProps) => {
  const { triggerOpen } = useItemGroupContext();

  return (
    <Item data-macaw-ui-component="ItemGroup.Trigger" {...rest}>
      <Box width="100%" height="100%" onClick={triggerOpen}>
        {children}
      </Box>
      <AccordionTrigger asChild>
        <Button
          icon={
            <ChevronDown
              className={icon}
              size={size ? iconSizeMap[size] : undefined}
            />
          }
          variant="tertiary"
          size={size}
          className={button}
        />
      </AccordionTrigger>
    </Item>
  );
};

Trigger.displayName = "ListItem.Trigger";
