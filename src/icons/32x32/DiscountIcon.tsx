import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const DiscountIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M4 16 16.414 3.586A2 2 0 0 1 17.828 3h6.344a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 29 7.828v6.344a2 2 0 0 1-.586 1.414L16 28M4 16l-.414.414A2 2 0 0 0 3 17.828v2.844a2 2 0 0 0 .586 1.414l6.328 6.328a2 2 0 0 0 1.414.586h2.844a2 2 0 0 0 1.414-.586L16 28M4 16l12 12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M24 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="currentColor"
      />
    </svg>
  )
);
