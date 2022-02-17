import clsx from "clsx";
import React from "react";

import { CircleIndicatorIcon, SuccessCircleIndicatorIcon } from "..";
import { PillColor } from "../Pill";
import useStyles from "./styles";

export type CircleIndicatorColor = PillColor;

export interface CircleIndicatorProps {
  color: CircleIndicatorColor;
}

export const CircleIndicator: React.FC<CircleIndicatorProps> = ({ color }) => {
  const classes = useStyles();

  return color === "success" ? (
    <SuccessCircleIndicatorIcon className={classes.success} />
  ) : (
    <CircleIndicatorIcon
      className={clsx({
        [classes.error]: color === "error",
        [classes.warning]: color === "warning",
        [classes.info]: color === "info",
      })}
    />
  );
};

CircleIndicator.displayName = "CircleIndicator";
