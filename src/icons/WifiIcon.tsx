import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const WifiIcon = createSvgIcon(
  <>
    <circle cx="12" cy="18" r="1" fill="currentColor" />
    <path
      d="M7 14.5C7 14.5 8.98795 12 12 12C15.012 12 17 14.5 17 14.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="transparent"
    />
    <path
      d="M3 10C3 10 6.57831 6 12 6C17.4217 6 21 10 21 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="transparent"
    />
  </>,
  "WifiIcon"
);
