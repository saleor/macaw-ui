import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const CloseSmallIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.53 6.53a.75.75 0 0 0-1.06-1.06L10 8.94 6.53 5.47a.75.75 0 0 0-1.06 1.06L8.94 10l-3.47 3.47a.75.75 0 1 0 1.06 1.06L10 11.06l3.47 3.47a.75.75 0 1 0 1.06-1.06L11.06 10l3.47-3.47Z"
        fill="currentColor"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;