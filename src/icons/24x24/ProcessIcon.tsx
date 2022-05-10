import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const ProcessIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx={12} cy={4} r={2.25} stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M4 4h5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M14.5 20H21m0 0-2.5-2.5M21 20l-2.5 2.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 12h12" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M14 4h5a1 1 0 0 1 1 1v5M4 14v5a1 1 0 0 0 1 1h5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle
        cx={20}
        cy={12}
        r={2.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle cx={4} cy={12} r={2.25} stroke="currentColor" strokeWidth={1.5} />
      <circle
        cx={12}
        cy={20}
        r={2.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;