"use client";

import { Close } from "./Close";
import { Content } from "./Content";
import { Root } from "./Root";
import { Trigger } from "./Trigger";

export type { ModalContentProps } from "./Content";
export type { ModalRootProps } from "./Root";
export type { ModalTriggerProps } from "./Trigger";

export const Modal = Object.assign(Root, { Content, Trigger, Close });

// Flat aliases of the dotted parts: Server Components can't access properties of client components
export {
  Content as ModalContent,
  Trigger as ModalTrigger,
  Close as ModalClose,
};
