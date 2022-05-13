import { createSvgIcon } from "@material-ui/core/utils";
import * as React from "react";
export const SearchLargeIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
    <circle cx={14} cy={14} r={11.25} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 22 7 7"
    />
  </svg>,
  "SearchLargeIcon"
);
