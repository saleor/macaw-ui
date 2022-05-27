import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const WifiIcon = React.forwardRef(
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
        <circle cx={12} cy={18.002} r={1} fill="currentColor" />
        <path
          d="M7 14.502s1.988-2.5 5-2.5 5 2.5 5 2.5m-14-4.5s3.578-4 9-4c5.422 0 9 4 9 4"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </SvgIcon>
    );
  }
);
