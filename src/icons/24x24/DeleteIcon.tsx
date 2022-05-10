import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const DeleteIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M9 10v8m3-8v8m3-8v8M5 4.5V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.5m-14 0H4m1 0h4m10 0h1m-1 0h-4m-6 0V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5m-6 0h6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;