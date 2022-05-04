import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const WifiIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx={12} cy={18.002} r={1} fill="currentColor" />
      <path
        d="M7 14.502s1.988-2.5 5-2.5 5 2.5 5 2.5m-14-4.5s3.578-4 9-4c5.422 0 9 4 9 4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
);
