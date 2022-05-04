import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const WifiIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx={16} cy={25} r={2} fill="currentColor" />
      <path
        d="M8 16s3.18-3.5 8-3.5 8 3.5 8 3.5M12 20s1.59-1.5 4-1.5 4 1.5 4 1.5M3 11.5S8.169 6 16 6s13 5.5 13 5.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
);
