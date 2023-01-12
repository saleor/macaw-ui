import React from "react";

import { IndicatorProps } from "./Indicator";

interface CircleFilledProps {
  size?: IndicatorProps["size"];
  className: string;
}

export const CircleFilled = ({ className, size }: CircleFilledProps) => {
  if (size === "small") {
    return <circle cx={8} cy={8} r={8} className={className} />;
  }

  return <circle cx={12} cy={12} r={12} className={className} />;
};
