import { Content as AccordionContent } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

import { Box, PropsWithBox } from "~/components/Box";
import { content } from "../common.css";

export type AccordionProps = PropsWithBox<{
  children: ReactNode;
}>;

export const Content = ({ children, ...rest }: AccordionProps) => (
  <AccordionContent asChild className={content}>
    <Box {...rest}>{children}</Box>
  </AccordionContent>
);
