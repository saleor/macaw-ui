import React from "react";

import { useMountWrapperStyles } from "./styles";

export interface MountWrapperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

/** Component used to wrap non-buttons for Tooltip support */
export const TooltipMountWrapper = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref) => {
  const classes = useMountWrapperStyles();

  return (
    <button className={classes.wrapper} {...props} ref={ref}>
      {children}
    </button>
  );
});
