import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const BillingIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M17 10.5V21l-3.5-2-3.5 2-3.5-2L3 21V6a3 3 0 0 1 3-3h12.5M17 10.5h2.5a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2v0M17 10.5V6c0-2 1.5-3 1.5-3m-12 5h7m-7 3h7m-7 3h7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
