import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const ExpendableIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M7 7h13m-10 5h10m-10 5h10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle cx={4} cy={7} r={1} fill="currentColor" />
      <circle cx={7} cy={12} r={1} fill="currentColor" />
      <circle cx={7} cy={17} r={1} fill="currentColor" />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;
