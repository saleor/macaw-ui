import clsx from "clsx";
import React from "react";

import { CircleIndicatorIcon, SuccessCircleIndicatorIcon, useTheme } from "..";
import { PillColor } from "../Pill";
import useStyles from "./styles";

export type CircleIndicatorColor = PillColor;

export interface CircleIndicatorProps {
  color: CircleIndicatorColor;
}

/**
 * @deprecated use IndicatorCircle component instead */
export const CircleIndicator: React.FC<CircleIndicatorProps> = ({ color }) => {
  const { themeType } = useTheme();
  const classes = useStyles();

  return color === "success" ? (
    <SuccessCircleIndicatorIcon
      className={clsx(classes.success, themeType === "dark" && classes.dark)}
    />
  ) : (
    <CircleIndicatorIcon
      className={clsx({
        [classes.error]: color === "error",
        [classes.warning]: color === "warning",
        [classes.info]: color === "info",
        [classes.dark]: themeType === "dark",
      })}
    />
  );
};

CircleIndicator.displayName = "CircleIndicator";
