import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const ToIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="m10 16.002 4-4-4-4m5 8 4-4-4-4m-10 8 4-4-4-4"
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
