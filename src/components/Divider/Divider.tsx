import { forwardRef } from "react";
import { Box, PropsWithBox } from "..";

export type DividerProps = PropsWithBox<{
  className?: string;
}>;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...rest }, ref) => {
    console.log(rest);
    return (
      <Box
        ref={ref}
        as="hr"
        className={className}
        backgroundColor="surfaceNeutralDepressed"
        borderWidth={0}
        width="100%"
        height={1}
        {...rest}
      />
    );
  }
);

Divider.displayName = "Divider";
