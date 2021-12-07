import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const WifiLargeIcon = createSvgIcon(
  <>
    <circle cx="16" cy="25" r="2" fill="currentColor" />
    <path
      d="M8 16C8 16 11.1807 12.5 16 12.5C20.8193 12.5 24 16 24 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="transparent"
    />
    <path
      d="M12 20C12 20 13.5904 18.5 16 18.5C18.4096 18.5 20 20 20 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="transparent"
    />
    <path
      d="M3 11.5C3 11.5 8.16867 6 16 6C23.8313 6 29 11.5 29 11.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="transparent"
    />
  </>,
  "WifiLargeIcon"
);
(WifiLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
