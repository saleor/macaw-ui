"use client";

import { TooltipRoot } from "./Root";
import { Trigger } from "./Trigger";
import { Arrow } from "./Arrow";
import { Content } from "./Content";
import { ContentHeading } from "./ContentHeading";

export type { TooltipArrowProps } from "./Arrow";
export type { TooltipContentProps } from "./Content";
export type { TooltipContentHeadingProps } from "./ContentHeading";
export type { TooltipTriggerProps } from "./Trigger";
export type { TooltipProps } from "./Root";

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger,
  Arrow,
  Content,
  ContentHeading,
});

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export {
  Trigger as TooltipTrigger,
  Arrow as TooltipArrow,
  Content as TooltipContent,
  ContentHeading as TooltipContentHeading,
};
