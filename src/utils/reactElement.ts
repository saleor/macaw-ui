import { type ReactNode } from "react";

type Primitives = string | number | boolean | undefined | null;
const primitives = [
  "string",
  "number",
  "boolean",
  "undefined",
  "null",
] as const;

export const isReactText = (element: ReactNode): element is Primitives => {
  return primitives.includes(typeof element as (typeof primitives)[number]);
};
