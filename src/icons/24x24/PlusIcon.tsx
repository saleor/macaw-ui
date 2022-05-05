import * as React from "react";
import { SVGProps } from "react";
export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12h12m-6-6v12"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
