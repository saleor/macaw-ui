import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const ErrorCircleIndicatorIcon = createSvgIcon(
  <>
    <circle cx="12" cy="12" r="12" fill="#FEADAD" />
    <circle cx="12" cy="12" r="9" fill="white" />
  </>,
  "ErrorCircleIndicatorIcon"
);
(ErrorCircleIndicatorIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 24 24",
};
