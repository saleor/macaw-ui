import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export interface ChipSwatchProps {
  color: string;
  className?: string;
}

export const ChipSwatch = ({ color, className }: ChipSwatchProps) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.swatch, className)}
      style={{ background: color }}
      aria-hidden="true"
    />
  );
};
