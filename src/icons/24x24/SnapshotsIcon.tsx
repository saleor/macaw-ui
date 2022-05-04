import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const SnapshotsIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M7 11V8a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3M7 11v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8M7 11h13"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16V5a1 1 0 0 1 1-1h11"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
