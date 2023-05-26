import { forwardRef, ReactNode } from "react";

import { Box, PropsWithBox } from "../Box";

export type ListProps = PropsWithBox<{
  children: ReactNode;
  as?: "ul" | "ol";
  className?: string;
}>;

export const List = forwardRef<HTMLUListElement | HTMLUListElement, ListProps>(
  ({ children, as = "ul", className, ...rest }, ref) => {
    return (
      <Box as={as} ref={ref} className={className} margin={0} {...rest}>
        {children}
      </Box>
    );
  }
);

List.displayName = "List";
