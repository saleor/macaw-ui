import {
  Provider as RadixTooltipProvider,
  Root as RadixTooltipRoot,
} from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface TooltipRootProps {
  children: ReactNode;
}

export const TooltipRoot = ({ children }: TooltipRootProps) => {
  return (
    <RadixTooltipProvider>
      <RadixTooltipRoot delayDuration={250}>{children}</RadixTooltipRoot>
    </RadixTooltipProvider>
  );
};
