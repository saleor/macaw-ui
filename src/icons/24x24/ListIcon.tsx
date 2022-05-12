import { createSvgIcon } from "@material-ui/core/utils";
import * as React from "react";
export const ListIcon = createSvgIcon(
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 7h13M7 12h13M7 17h13"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <circle cx={4} cy={7} r={1} fill="currentColor" />
    <circle cx={4} cy={12} r={1} fill="currentColor" />
    <circle cx={4} cy={17} r={1} fill="currentColor" />
  </svg>,
  "ListIcon"
);
