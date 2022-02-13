import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const InfoCircleIndicatorIcon = createSvgIcon(
  <>
    <circle cx="12" cy="12" r="12" fill="#28234A" />
    <circle cx="12" cy="12" r="9" fill="white" />
  </>,
  "InfoCircleIndicatorIcon"
);
(InfoCircleIndicatorIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 24 24",
};
