import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const DownloadIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v14m0 0-4-4m4 4 4-4M3 21h18"
      />
    </svg>
  )
);
