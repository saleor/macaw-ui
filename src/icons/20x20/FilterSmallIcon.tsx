import * as React from "react";
import { SVGProps } from "react";
export const FilterSmallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 7V3h14v4l-5 5v3.5L8 17v-5L3 7Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);
