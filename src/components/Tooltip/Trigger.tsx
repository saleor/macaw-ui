import { ReactNode } from "react";
import { Trigger as RadixTooltipTrigger } from "@radix-ui/react-tooltip";

interface TriggerProps {
  children: ReactNode;
}

export const Trigger = ({ children }: TriggerProps) => {
  return <RadixTooltipTrigger asChild>{children}</RadixTooltipTrigger>;
};
