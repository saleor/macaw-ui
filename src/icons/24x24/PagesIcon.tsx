import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const PagesIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M5 20V4a1 1 0 0 1 1-1h8.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm3-9h8m-8 3h8m-8 3h8"
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
