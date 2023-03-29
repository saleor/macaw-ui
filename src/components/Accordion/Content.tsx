import { Content as AccordionContent } from "@radix-ui/react-accordion";
import { ReactNode } from "react";
import { content } from "./common.css";

export type AccordionProps = {
  children: ReactNode;
};

export const Content = ({ children }: AccordionProps) => (
  <AccordionContent asChild className={content}>
    {children}
  </AccordionContent>
);
