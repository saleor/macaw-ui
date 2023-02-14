import { forwardRef, ReactNode } from "react";
import { classNames } from "~/utils";
import { Box } from "../Box";

import { chip, ChipVariants } from "./Chip.css";

export type ChipProps = ChipVariants & {
  children: ReactNode;
  className?: string;
};
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ children, size, className, ...props }, ref) => {
    return (
      <Box
        as="div"
        className={classNames(
          chip({
            size,
          }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Chip.displayName = "Chip";
