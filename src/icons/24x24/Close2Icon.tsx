import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const Close2Icon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="m8 8.002 8 8m-8 0 8-8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={12}
        cy={12.002}
        r={10}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
);
