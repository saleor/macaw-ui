import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const NavigationLargeIcon = React.forwardRef(
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
        <circle
          cx={16}
          cy={16}
          r={13.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="m10.034 14.229 10.303-3.908c.819-.311 1.613.507 1.278 1.317l-4.277 10.336a1 1 0 0 1-1.818.065l-1.88-3.759a1.001 1.001 0 0 0-.415-.43l-3.316-1.81a1 1 0 0 1 .125-1.812Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
