import * as React from "react";
import { SVGProps } from "react";
export const PermissionLargeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={19} r={9.25} stroke="currentColor" strokeWidth={1.5} />
    <path
      d="M10 12V9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v3m-6 5v4m0-4h2m-2 0h-2"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
