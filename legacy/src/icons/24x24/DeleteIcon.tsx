import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const DeleteIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          d="M9 10v8m3-8v8m3-8v8M5 4.5V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.5m-14 0H4m1 0h4m10 0h1m-1 0h-4m-6 0V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5m-6 0h6"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
