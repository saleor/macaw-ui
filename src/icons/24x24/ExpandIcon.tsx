import { createSvgIcon } from "@material-ui/core/utils";
import * as React from "react";
export const ExpandIcon = createSvgIcon(
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m8 10.5 4 4 4-4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={12} cy={12} r={10.25} stroke="currentColor" strokeWidth={1.5} />
  </svg>,
  "ExpandIcon"
);
