"use client";

import { Root } from "./Root";
import { Content, Item, Trigger, TriggerButton } from "./Item";

export const Accordion = Object.assign(Root, {
  Item,
  Trigger,
  Content,
  TriggerButton,
});

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export {
  Item as AccordionItem,
  Trigger as AccordionTrigger,
  Content as AccordionContent,
  TriggerButton as AccordionTriggerButton,
};
