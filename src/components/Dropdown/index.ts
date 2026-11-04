"use client";

import { Content } from "./Content";
import { Item } from "./Item";
import { DropdownRoot } from "./Root";
import { Trigger } from "./Trigger";

export type { DropdownContentProps } from "./Content";
export type { DropdownRootProps } from "./Root";
export type { DropdownTriggerProps } from "./Trigger";

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger,
  Content,
  Item,
});

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export {
  Trigger as DropdownTrigger,
  Content as DropdownContent,
  Item as DropdownItem,
};
