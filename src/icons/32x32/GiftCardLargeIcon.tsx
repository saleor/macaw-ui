import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const GiftcardLargeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M11 6h17a1 1 0 0 1 1 1v7M11 6H4a1 1 0 0 0-1 1v7m8-8v8m0 12H4a1 1 0 0 1-1-1V14m8 12h17a1 1 0 0 0 1-1V14M11 26V14m-8 0h8m0 0h18m-12 5.5h8M17 22h2m3 0h3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 14h2.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0-2.5 2.5V14Zm0 0H8.5a2.5 2.5 0 1 1 2.5-2.5V14Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="m11 14-3 3m3-3 3 3"
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
