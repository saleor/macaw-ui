import { forwardRef, ReactNode } from "react";

import { Box } from "../Box";

type ListProps = {
  children: ReactNode;
  as?: "ul" | "ol";
  className?: string;
};

export const List = forwardRef<HTMLUListElement | HTMLUListElement, ListProps>(
  ({ children, as = "ul", className }, ref) => {
    return (
      <Box as={as} ref={ref} className={className}>
        {children}
      </Box>
    );
  }
);

List.displayName = "List";
