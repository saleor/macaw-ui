import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const NotesLargeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <rect
        x={5}
        y={3}
        width={22}
        height={26}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <mask id="a" fill="currentColor">
        <rect x={8} y={6} width={8} height={5} rx={1} />
      </mask>
      <rect
        x={8}
        y={6}
        width={8}
        height={5}
        rx={1}
        stroke="currentColor"
        strokeWidth={3}
        mask="url(#a)"
      />
      <path
        d="M9 17h14M9 21h14M9 25h14"
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