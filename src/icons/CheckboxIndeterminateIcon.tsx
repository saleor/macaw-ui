import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const CheckboxIndeterminateIcon = createSvgIcon(
  <>
    <rect x="0.5" y="0.5" width="23" height="23" rx="1.5" fill="currentColor" />
    <rect
      x="4"
      y="10"
      width="16"
      height="4"
      rx="1.5"
      fill="var(--background-paper)"
    />
  </>,
  "CheckboxIndeterminateIcon"
);
