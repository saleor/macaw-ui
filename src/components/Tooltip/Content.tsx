import { ReactNode } from "react";
import {
  Portal as RadixTooltipPortal,
  Content as RadixTooltipContent,
} from "@radix-ui/react-tooltip";
// import { classNames } from "~/utils";
// import { content } from "./Tooltip.css";
import { vars } from "~/theme";

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
        className={className}
        asChild
        style={{
          borderRadius: vars.borderRadius[1],
          padding: vars.spacing[2],
          fontSize: vars.fontSize[1],
          lineHeight: vars.lineHeight[1],
          color: vars.colors.text.default1,
          backgroundColor: vars.colors.background.default1,
          // boxShadow: vars.boxShadow.defaultModal,
          boxShadow:
            "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
        }}
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
