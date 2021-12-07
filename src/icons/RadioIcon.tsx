import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const RadioIcon = createSvgIcon(
  <>
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="var(--background-paper)"
      stroke="currentColor"
      strokeWidth="2"
    />
  </>,
  "RadioIcon"
);
