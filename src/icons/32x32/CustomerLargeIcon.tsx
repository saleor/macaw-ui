import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const CustomerLargeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx={16} cy={9} r={5.25} stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M27.429 29H4.57A1.571 1.571 0 0 1 3 27.429 9.429 9.429 0 0 1 12.429 18h7.142A9.429 9.429 0 0 1 29 27.429c0 .867-.704 1.571-1.571 1.571Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;
