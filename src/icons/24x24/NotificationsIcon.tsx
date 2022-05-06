import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const NotificationsIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M3 18.5h2m16 0h-2m-14 0V10a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v8.5m-14 0h4m10 0h-4m-6 0v0a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v0m-6 0h6"
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
