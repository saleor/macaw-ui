import React from "react";

import { Pill, PillColor } from "../Pill/Pill";
import { StatusChipProps } from "./types";

const colors: Record<StatusChipProps["variant"], PillColor> = {
  error: "error",
  neutral: "info",
  success: "success",
  warning: "warning",
};

/**
 *
 * @deprecated
 */
export const StatusChip: React.FC<StatusChipProps> = ({
  size: _,
  variant,
  ...rest
}) => {
  const color = colors[variant];

  return <Pill color={color} {...rest} />;
};

StatusChip.displayName = "HeaderChip";
