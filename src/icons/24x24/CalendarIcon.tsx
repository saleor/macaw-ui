import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const CalendarIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M4 11V6a1 1 0 0 1 1-1h3m-4 6v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9M4 11h16m0 0V6a1 1 0 0 0-1-1h-3M8 5V3m0 2v2m0-2h8m0 0V3m0 2v2"
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
