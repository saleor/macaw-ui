import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const ProductIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="m3 8.5 1.868-4.203A.5.5 0 0 1 5.325 4h13.35a.5.5 0 0 1 .457.297L21 8.5m-18 0v11a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-11m-18 0h6.5m11.5 0h-6.5m-5 0v6l2.243-1.346a.5.5 0 0 1 .514 0L14.5 14.5v-6m-5 0h5"
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
