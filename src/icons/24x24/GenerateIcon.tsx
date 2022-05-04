import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const GenerateIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M10.5 6.5H4a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1v-6.5m-3.5-7h3.5m3.5 0h-3.5m0 0V3m0 3.5V10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
