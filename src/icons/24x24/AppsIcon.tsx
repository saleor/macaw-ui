import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const AppsIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M7 3.5v7M3.5 7h7m4 14H20a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1Zm0-10.5H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1ZM4 21h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;