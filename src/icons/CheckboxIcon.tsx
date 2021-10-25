import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const CheckboxIcon = createSvgIcon(
  <>
    <rect width="24" height="24" rx="2" fill="currentColor" />
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="1"
      fill="white"
      strokeOpacity="0.6"
      strokeWidth="2"
    />
  </>,
  "CheckboxIcon"
);
