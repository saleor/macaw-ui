import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const ExpandIcon = createSvgIcon(
  <>
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="2"
    />
    <path
      d="M8 10L12 14L16 10"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="2"
    />
  </>,
  "ExpandIcon"
);
