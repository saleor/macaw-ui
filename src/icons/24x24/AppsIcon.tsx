import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const AppsIcon = React.forwardRef(
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
          d="M7 3.5v7M3.5 7h7m4 14H20a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1Zm0-10.5H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-5.5a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1ZM4 21h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </SvgIcon>
    );
  }
);
