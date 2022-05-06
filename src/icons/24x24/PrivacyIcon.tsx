import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const PrivacyIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      ref={ref}
      {...props}
    >
      <circle
        cx={12}
        cy={15}
        r={6.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 10V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v3m-4 4v3m0-3h1m-1 0h-1"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;
