import { Children, ReactNode } from "react";

// Any child is the empty state. Comparing child.type with NoOptions breaks for children passed from a
// Server Component: they arrive as lazy references, so their type is never NoOptions.
export const hasNoOptions = (children: ReactNode): boolean =>
  Children.toArray(children).length > 0;
