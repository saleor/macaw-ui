import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const WebsiteIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        viewBox="0 0 24 25"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 20.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5Z"
        />
        <mask id="a" fill="currentColor">
          <rect width={6} height={4} x={6} y={6} rx={1} />
        </mask>
        <rect
          width={6}
          height={4}
          x={6}
          y={6}
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={3}
          mask="url(#a)"
          rx={1}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 13h10M7 17h10"
        />
      </SvgIcon>
    );
  }
);
