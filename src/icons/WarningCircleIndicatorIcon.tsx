import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const WarningCircleIndicatorIcon = createSvgIcon(
  <>
    <circle cx="12" cy="12" r="12" fill="#FFE6AB" />
    <circle cx="12" cy="12" r="9" fill="white" />
  </>,
  "WarningCircleIndicatorIcon"
);
(WarningCircleIndicatorIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 24 24",
};
