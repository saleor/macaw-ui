import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const PresetIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M16 6h4M4 6h4m5 6h7M4 12h1m14 6h1M4 18h7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M13.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="currentColor"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;
