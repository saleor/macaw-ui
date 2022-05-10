import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const ShippingLargeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M18.5 7h-4.653a1 1 0 0 0-.986.836l-2.667 16A1 1 0 0 0 11.18 25h13.973a1 1 0 0 0 .986-.836l2.667-16A1 1 0 0 0 27.82 7H23.5m-5 0-.806 4.836A1 1 0 0 0 18.68 13h2.973a1 1 0 0 0 .986-.836L23.5 7m-5 0h5M2 12h7m-7 4h5m-5 4h3"
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