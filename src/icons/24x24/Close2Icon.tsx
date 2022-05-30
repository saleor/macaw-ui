import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const Close2Icon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          d="m8 8.002 8 8m-8 0 8-8"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={12}
          cy={12.002}
          r={10}
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </SvgIcon>
    );
  }
);
