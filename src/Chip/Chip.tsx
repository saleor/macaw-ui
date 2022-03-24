import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export interface ChipProps {
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      startAdornment,
      endAdornment,
      onClick = () => {},
      className,
      children,
    }: ChipProps,
    ref
  ) => {
    const classes = useStyles();

    return (
      <div
        className={clsx(classes.chip, className)}
        onClick={() => onClick()}
        ref={ref}
      >
        {startAdornment &&
          React.cloneElement(startAdornment, {
            className: clsx(
              classes.startAdornment,
              startAdornment.props.className
            ),
          })}
        <span>{children}</span>
        {endAdornment &&
          React.cloneElement(endAdornment, {
            className: clsx(classes.endAdornment, endAdornment.props.className),
          })}
      </div>
    );
  }
);

Chip.displayName = "Chip";
