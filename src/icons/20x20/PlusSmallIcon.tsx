import { createSvgIcon } from "@material-ui/core/utils";
import * as React from "react";
export const PlusSmallIcon = createSvgIcon(
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 5v10m-5-5h10"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  "PlusSmallIcon"
);
