import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const SearchLargeIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        viewBox="0 0 32 32"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <circle
          cx={14}
          cy={14}
          r={11.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m22 22 7 7"
        />
      </SvgIcon>
    );
  }
);
