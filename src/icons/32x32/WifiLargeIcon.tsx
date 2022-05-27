import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const WifiLargeIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <circle cx={16} cy={25} r={2} fill="currentColor" />
        <path
          d="M8 16s3.18-3.5 8-3.5 8 3.5 8 3.5m-12 4s1.59-1.5 4-1.5 4 1.5 4 1.5M3 11.5S8.169 6 16 6s13 5.5 13 5.5"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </SvgIcon>
    );
  }
);
