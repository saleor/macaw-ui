import clsx from "clsx";
import React from "react";

import { Circle } from "./Circle";
import { IndicatorIcon } from "./Indicator";
import { getSizeDimension, useStyles } from "./styles";

export interface IndicatorCircleProps {
  icon: IndicatorIcon;
  className?: string;
}

export const IndicatorCircle = ({ icon, className }: IndicatorCircleProps) => {
  const classes = useStyles({ size: "regular", icon });

  const viewBoxSize = getSizeDimension("regular");

  return (
    <span className={clsx(classes.wrapper, classes.wrapperCircle, className)}>
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.absolute}
      >
        <Circle className={classes.circlePath} />
      </svg>
      {icon === "success" && (
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          fill="none"
          className={classes.absolute}
        >
          <path
            d="M8 12.8571L10.1053 15L16 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </span>
  );
};
