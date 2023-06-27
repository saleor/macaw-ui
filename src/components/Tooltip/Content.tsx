import { ReactNode } from "react";
import {
  Portal as RadixTooltipPortal,
  Content as RadixTooltipContent,
} from "@radix-ui/react-tooltip";
import { classNames } from "~/utils";
import { content } from "./Tooltip.css";

export interface TooltipContentProps {
  children: ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  avoidCollisions?: boolean;
}

export const Content = ({
  children,
  className,
  sideOffset = 2,
  avoidCollisions = true,
  ...props
}: TooltipContentProps) => {
  return (
    <RadixTooltipPortal>
      <RadixTooltipContent
        className={classNames(content, className)}
        sideOffset={sideOffset}
        avoidCollisions={avoidCollisions}
        data-macaw-ui-component="Tooltip.Content"
        {...props}
      >
        {children}
      </RadixTooltipContent>
    </RadixTooltipPortal>
  );
};

Content.displayName = "Tooltip.Content";
