import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const StaffmembersIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx={16} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M20.902 20h-9.804a.098.098 0 0 1-.098-.098A3.902 3.902 0 0 1 14.902 16h2.196A3.902 3.902 0 0 1 21 19.902a.098.098 0 0 1-.098.098ZM11 26h4M11 23h10M18 26h3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5H8a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5m-5 0V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2m-5 0v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
