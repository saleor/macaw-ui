import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const WebsiteIcon = createSvgIcon(
  <>
    <rect width="24" height="24" fill="var(--background-paper)" />
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="transparent"
    />
    <rect x="6" y="6" width="4" height="4" rx="1" fill="currentColor" />
    <rect x="6" y="12" width="12" height="2" rx="0.5" fill="currentColor" />
    <rect x="6" y="16" width="12" height="2" rx="0.5" fill="currentColor" />
  </>,
  "WebsiteIcon"
);
