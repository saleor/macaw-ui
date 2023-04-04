import { ReactNode } from "react";
import {
  Portal as RadixTooltipPortal,
  Content as RadixTooltipContent,
} from "@radix-ui/react-tooltip";
import { content } from "./Tooltip.css";

interface ContentProps {
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

export const Content = ({ children, side = "bottom" }: ContentProps) => {
  return (
    <RadixTooltipPortal>
      <RadixTooltipContent side={side} sideOffset={2} className={content}>
        {children}
      </RadixTooltipContent>
    </RadixTooltipPortal>
  );
};
