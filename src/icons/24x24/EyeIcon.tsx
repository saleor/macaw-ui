import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const EyeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.818 12.086a1.16 1.16 0 0 1-.048-.084c.011-.021.027-.05.048-.084.083-.133.222-.31.424-.52.403-.417 1.008-.91 1.776-1.382.576-.355 1.232-.69 1.951-.973A4.978 4.978 0 0 0 7 12.002c0 1.107.36 2.13.969 2.959a12.35 12.35 0 0 1-1.95-.973c-.769-.472-1.374-.965-1.777-1.382a3.307 3.307 0 0 1-.424-.52Zm12.213 2.875a12.35 12.35 0 0 0 1.95-.973c.769-.472 1.374-.965 1.777-1.382.202-.21.34-.387.424-.52l.048-.084a1.164 1.164 0 0 0-.048-.084 3.302 3.302 0 0 0-.424-.52c-.403-.417-1.008-.91-1.776-1.382a12.347 12.347 0 0 0-1.951-.973c.61.829.969 1.852.969 2.959s-.36 2.13-.969 2.959ZM12 6.75c-2.67 0-5.056.933-6.768 1.987-.857.528-1.565 1.097-2.068 1.618-.25.259-.464.52-.62.77-.14.225-.294.537-.294.876 0 .34.154.651.295.877.155.25.368.51.619.77.503.52 1.21 1.09 2.068 1.617C6.944 16.32 9.329 17.252 12 17.252c2.67 0 5.056-.932 6.768-1.986.857-.528 1.565-1.097 2.068-1.618.25-.26.464-.52.62-.77.14-.225.294-.537.294-.876 0-.34-.154-.651-.295-.877a4.769 4.769 0 0 0-.619-.77c-.503-.52-1.21-1.09-2.068-1.617C17.056 7.684 14.671 6.752 12 6.752Zm3.5 5.251a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        fill="currentColor"
      />
    </svg>
  )
);
