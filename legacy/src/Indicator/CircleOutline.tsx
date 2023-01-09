import React from "react";

import { IndicatorProps } from "./Indicator";

interface CircleOutlineProps {
  size: IndicatorProps["size"];
  className: string;
}

export const CircleOutline = ({ className, size }: CircleOutlineProps) => {
  if (size === "small") {
    return (
      <circle
        cx={8}
        cy={8}
        r={7.25}
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      />
    );
  }

  return (
    <circle
      cx={12}
      cy={12}
      r={11.25}
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    />
  );
};
