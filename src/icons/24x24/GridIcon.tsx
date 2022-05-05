import * as React from "react";
import { SVGProps } from "react";
export const GridIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={3}
      y={3}
      width={7}
      height={7}
      rx={1}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <rect
      x={14}
      y={3}
      width={7}
      height={7}
      rx={1}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <rect
      x={3}
      y={14}
      width={7}
      height={7}
      rx={1}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <rect
      x={14}
      y={14}
      width={7}
      height={7}
      rx={1}
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
