import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const GridIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
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
  )
);
