import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const SearchIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path fill="currentColor" d="M0 0h32v32H0z" />
      <circle
        cx={14}
        cy={14}
        r={11.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="m22 22 7 7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
