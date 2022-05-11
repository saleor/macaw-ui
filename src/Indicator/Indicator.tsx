import clsx from "clsx";
import React from "react";

import {
  ErrorIndicatorIcon,
  ErrorSmallIndicatorIcon,
  FailIndicatorIcon,
  SuccessIndicatorIcon,
  SuccessSmallIndicatorIcon,
  WarningIndicatorIcon,
  WarningSmallIndicatorIcon,
} from "../icons/indicator";
import { CircleFilled } from "./CircleFilled";
import { getSizeDimension, useStyles } from "./styles";

export type IndicatorIcon = "warning" | "error" | "success" | "fail";

export type IndicatorSize = "regular" | "small";

export type IndicatorCombinations = `${IndicatorIcon}-${IndicatorSize}`;

export interface IndicatorProps {
  icon: IndicatorIcon;
  variant?: "outline" | "filled" | "text" | "icon";
  size?: IndicatorSize;
  className?: string;
}

export const mapVariantToIcon: Record<
  IndicatorCombinations,
  React.FunctionComponent<{ className?: string }>
> = {
  "warning-regular": WarningIndicatorIcon,
  "warning-small": WarningSmallIndicatorIcon,
  "fail-regular": FailIndicatorIcon,
  "fail-small": FailIndicatorIcon,
  "error-regular": ErrorIndicatorIcon,
  "error-small": ErrorSmallIndicatorIcon,
  "success-regular": SuccessIndicatorIcon,
  "success-small": SuccessSmallIndicatorIcon,
};

export const Indicator = React.forwardRef<HTMLSpanElement, IndicatorProps>(
  ({ icon, size = "regular", className }, ref) => {
    const classes = useStyles({ icon, size });

    const Icon = mapVariantToIcon[`${icon}-${size}` as IndicatorCombinations];

    const viewBoxSize = getSizeDimension(size);

    return (
      <span className={clsx(classes.wrapper, className)} ref={ref}>
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.absolute}
        >
          <CircleFilled size={size} className={classes.circlePath} />
        </svg>
        <Icon className={classes.absolute} />
      </span>
    );
  }
);
