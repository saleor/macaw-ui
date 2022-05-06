import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const TimeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={9.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="m9 7.5 3 4.5 3-1"
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
