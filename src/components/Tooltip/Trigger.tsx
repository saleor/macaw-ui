import { ReactNode, forwardRef } from "react";
import { Trigger as RadixTooltipTrigger } from "@radix-ui/react-tooltip";

export interface TooltipTriggerProps {
  children: ReactNode;
}

export const Trigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ children }, ref) => {
    return (
      <RadixTooltipTrigger asChild ref={ref}>
        {children}
      </RadixTooltipTrigger>
    );
  }
);

Trigger.displayName = "TooltipTrigger";
