import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const MoreHorizontalIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="currentColor"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;
