import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const ProductLargeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M3 10v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10M3 10l3.406-5.11A2 2 0 0 1 8.07 4h15.86a2 2 0 0 1 1.664.89L29 10M3 10h9m17 0h-9m-8 0v9.191a.5.5 0 0 0 .724.447l2.829-1.414a1 1 0 0 1 .894 0l2.83 1.414a.5.5 0 0 0 .723-.447V10m-8 0h8"
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