import clsx from "clsx";
import React from "react";

import useStyles from "../styles";

export interface ColorSwatchProps {
  color: string;
  className?: string;
}

export const ColorSwatch = ({ color, className }: ColorSwatchProps) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.swatch, className)}
      style={{ background: color }}
      aria-hidden="true"
    />
  );
};
