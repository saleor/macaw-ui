import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export interface ChipProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    { startAdornment, endAdornment, className, children, ...props }: ChipProps,
    ref
  ) => {
    const classes = useStyles();

    return (
      <div className={clsx(classes.chip, className)} ref={ref} {...props}>
        {startAdornment && (
          <span className={classes.startAdornment}>{startAdornment}</span>
        )}
        <span>{children}</span>
        {endAdornment && (
          <span className={classes.endAdornment}>{endAdornment}</span>
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";
