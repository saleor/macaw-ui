import { AccordionContent } from "@radix-ui/react-accordion";
import { ReactNode } from "react";

export const Content = ({ children }: { children: ReactNode }) => {
  return <AccordionContent asChild>{children}</AccordionContent>;
};
