import { ReactNode } from "react";
import { Trigger as RadixTooltipTrigger } from "@radix-ui/react-tooltip";

export interface TooltipTriggerProps {
  children: ReactNode;
}

export const Trigger = ({ children }: TooltipTriggerProps) => {
  return <RadixTooltipTrigger asChild>{children}</RadixTooltipTrigger>;
};
