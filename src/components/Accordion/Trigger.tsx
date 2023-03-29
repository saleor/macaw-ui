import { Trigger as AccordionTrigger } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { Box, PropsWithBox } from "../Box";
import { Button } from "../Button";
import { ChervonDownIcon } from "../Icons";
import { icon } from "./common.css";

export type AccordionProps = PropsWithBox<{
  children: ReactNode;
  buttonDataTestId?: string;
}>;

export const Trigger = ({
  children,
  buttonDataTestId,
  ...rest
}: AccordionProps) => (
  <AccordionTrigger asChild>
    <Box
      display="flex"
      justifyContent="space-between"
      gap={5}
      alignItems="center"
      cursor="pointer"
      {...rest}
    >
      {children}
      <Button
        icon={<ChervonDownIcon className={icon} />}
        variant="secondary"
        type="button"
        data-test-id={buttonDataTestId}
      />
    </Box>
  </AccordionTrigger>
);
