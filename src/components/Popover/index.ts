"use client";

import { Content } from "./Content";
import { Anchor } from "./Anchor";
import { Trigger } from "./Trigger";
import { Arrow } from "./Arrow";
import { PopoverRoot } from "./Root";
import { Close } from "./Close";

export type { PopoverContentProps } from "./Content";
export type { PopoverAnchorProps } from "./Anchor";
export type { PopoverTriggerProps } from "./Trigger";
export type { PopoverArrowProps } from "./Arrow";
export type { PopoverProps } from "./Root";

export const Popover = Object.assign(PopoverRoot, {
  Trigger,
  Content,
  Anchor,
  Arrow,
  Close,
});

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export {
  Trigger as PopoverTrigger,
  Content as PopoverContent,
  Anchor as PopoverAnchor,
  Arrow as PopoverArrow,
  Close as PopoverClose,
};
