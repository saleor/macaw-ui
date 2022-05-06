import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const NoConnectionIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <circle cx={12} cy={18.002} r={1} fill="currentColor" />
      <path
        d="M7 14.502s.358-.45 1-.968m9 .968s-.849-1.068-2.278-1.807M3 10.002s3.578-4 9-4m9 4s-1.045-1.168-2.86-2.242"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M17.645 3.885a.75.75 0 1 0-1.29-.766l1.29.766ZM6.855 19.119a.75.75 0 0 0 1.29.766l-1.29-.766Zm9.5-16-9.5 16 1.29.766 9.5-16-1.29-.766Z"
        fill="currentColor"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;
