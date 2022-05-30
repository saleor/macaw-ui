import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const NotificationsIcon = React.forwardRef(
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
          d="M3 18.5h2m16 0h-2m-14 0V10a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v8.5m-14 0h4m10 0h-4m-6 0v0a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v0m-6 0h6"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
