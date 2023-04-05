import {
  Provider as RadixTooltipProvider,
  Root as RadixTooltipRoot,
} from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface TooltipRootProps {
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  open?: boolean;
  delayDuration?: number;
  onOpenChange?: (open: boolean) => void;
}

export const TooltipRoot = ({
  children,
  delayDuration = 250,
  ...props
}: TooltipRootProps) => {
  return (
    <RadixTooltipProvider>
      <RadixTooltipRoot delayDuration={delayDuration} {...props}>
        {children}
      </RadixTooltipRoot>
    </RadixTooltipProvider>
  );
};
