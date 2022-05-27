import SvgIcon, { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import * as React from "react";
import { forwardRef, Ref } from "react";

export const BackIcon = forwardRef(
  (props: SvgIconTypeMap["props"], ref: Ref<SVGSVGElement>) => (
    <SvgIcon
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M12.5 5.5 8 10l4.5 4.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
);
