import { ReactNode, forwardRef } from "react";
import { Trigger as RadixTooltipTrigger } from "@radix-ui/react-tooltip";

export interface TooltipTriggerProps {
  children: ReactNode;
  onFocus?: () => void;
}

export const Trigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ children, onFocus }, ref) => {
    return (
      <RadixTooltipTrigger asChild ref={ref} onFocus={onFocus}>
        {children}
      </RadixTooltipTrigger>
    );
  }
);

Trigger.displayName = "TooltipTrigger";
