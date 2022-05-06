import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const DeveloperIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="m12.5 10.5-1.5 7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M3 7h18"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="m8 12-2 2 2 2m8-4 2 2-2 2"
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
