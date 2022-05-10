import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const PhotoIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M3 18V3.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5V14M3 18v2.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V14M3 18l6.184-6.184a.5.5 0 0 1 .665-.036l1.801 1.44a.5.5 0 0 0 .666-.036l3.811-3.811a.5.5 0 0 1 .726.019L21 14"
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