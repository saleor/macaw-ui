"use client";

import { Content } from "./Content";
import { Root } from "./Root";
import { Trigger } from "./Trigger";

export type { DrawerRootProps } from "./Root";
export type { DrawerTriggerProps } from "./Trigger";
export type { DrawerContentProps } from "./Content";

export const Drawer = Object.assign(Root, { Content, Trigger });

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export { Content as DrawerContent, Trigger as DrawerTrigger };
