import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const SuccessCircleIndicatorIcon = createSvgIcon(
  <>
    <circle cx="12" cy="12" r="12" fill="#A4E8BA" />
    <circle cx="12" cy="12" r="9" fill="white" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7071 13.5858L16 8.29291L17.4142 9.70712L10.7071 16.4142L7 12.7071L8.41421 11.2929L10.7071 13.5858Z"
      fill="#A4E8BA"
    />
  </>,
  "SuccessCircleIndicatorIcon"
);
(SuccessCircleIndicatorIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 24 24",
};
