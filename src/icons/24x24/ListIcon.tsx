import * as React from "react";
import { SVGProps } from "react";
export const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 7h13M7 12h13M7 17h13"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <circle cx={4} cy={7} r={1} fill="currentColor" />
    <circle cx={4} cy={12} r={1} fill="currentColor" />
    <circle cx={4} cy={17} r={1} fill="currentColor" />
  </svg>
);
