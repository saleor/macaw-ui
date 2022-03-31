import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export interface ChipProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  startAdornment?: React.ReactElement;
  startAdornmentClassName?: string;
  endAdornment?: React.ReactElement;
  endAdornmnetClassName?: string;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      startAdornment,
      startAdornmentClassName,
      endAdornment,
      endAdornmnetClassName,
      className,
      children,
      ...props
    }: ChipProps,
    ref
  ) => {
    const classes = useStyles();

    return (
      <div className={clsx(classes.chip, className)} ref={ref} {...props}>
        {startAdornment && (
          <span
            className={clsx(classes.startAdornment, startAdornmentClassName)}
          >
            {startAdornment}
          </span>
        )}
        <span>{children}</span>
        {endAdornment && (
          <span className={clsx(classes.endAdornment, endAdornmnetClassName)}>
            {endAdornment}
          </span>
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";
