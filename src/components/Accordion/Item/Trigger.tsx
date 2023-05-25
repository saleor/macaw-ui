import {
  Header as AccordionHeader,
  Trigger as AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { Box, PropsWithBox } from "../../Box";
import { Button } from "../../Button";
import { ChervonDownIcon } from "../../Icons";
import { icon } from "../common.css";

export type AccordionTriggerProps = PropsWithBox<{
  children: ReactNode;
  buttonDataTestId?: string;
}>;

export const Trigger = ({
  children,
  buttonDataTestId,
  disabled,
  ...rest
}: AccordionTriggerProps) => (
  <AccordionHeader asChild>
    <AccordionTrigger
      asChild
      onClick={(e) => {
        disabled && e.preventDefault();
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        gap={2}
        alignItems="center"
        cursor={disabled ? "not-allowed" : "pointer"}
        disabled={disabled}
        {...rest}
      >
        {children}
        <Button
          icon={<ChervonDownIcon className={icon} />}
          variant="secondary"
          type="button"
          data-test-id={buttonDataTestId}
          disabled={disabled}
        />
      </Box>
    </AccordionTrigger>
  </AccordionHeader>
);

Trigger.displayName = "Accordion.Trigger";
