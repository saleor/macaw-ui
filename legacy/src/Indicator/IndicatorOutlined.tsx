import clsx from "clsx";
import React from "react";

import { FailOutlineIndicatorIcon } from "../icons/indicator";
import { CircleOutline } from "./CircleOutline";
import {
  IndicatorCombinations,
  IndicatorIcon,
  IndicatorSize,
  mapVariantToIcon,
} from "./Indicator";
import { getSizeDimension, useStyles } from "./styles";

export interface IndicatorOutlinedProps {
  icon: IndicatorIcon;
  size?: IndicatorSize;
  color?: "default" | "text";
  className?: string;
}

const getIconComponent = (icon: IndicatorIcon, size: IndicatorSize) => {
  if (icon === "fail") {
    return FailOutlineIndicatorIcon;
  }
  return mapVariantToIcon[`${icon}-${size}` as IndicatorCombinations];
};

export const IndicatorOutlined = ({
  icon,
  size = "regular",
  color = "default",
  className,
}: IndicatorOutlinedProps) => {
  const classes = useStyles({ icon, size });

  const Icon = getIconComponent(icon, size);
  const viewBoxSize = getSizeDimension(size);

  const hasColor = color === "default";

  return (
    <span
      className={clsx(
        classes.wrapper,
        hasColor && classes.wrapperOutline,
        className
      )}
    >
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.absolute}
      >
        <CircleOutline
          size={size}
          className={clsx(classes.absolute, hasColor && classes.circleOutline)}
        />
      </svg>
      <Icon />
    </span>
  );
};
