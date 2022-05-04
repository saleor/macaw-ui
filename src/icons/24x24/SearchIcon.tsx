import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const SearchIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle
        cx={11}
        cy={11}
        r={7.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
