import * as React from "react";
import { SVGProps } from "react";
export const TransferIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 7H4m0 0 4-4M4 7l4 4m-4 6h16m0 0-4-4m4 4-4 4"
    />
  </svg>
);
