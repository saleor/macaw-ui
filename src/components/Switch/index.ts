"use client";

import { SwitchRoot } from "./Switch";
import { SwitchItem as Item } from "./Item";

export type { SwitchItemProps } from "./Item";
export type { SwitchRoot } from "./Switch";

export const Switch = Object.assign(SwitchRoot, { Item });

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export { Item as SwitchItem };
