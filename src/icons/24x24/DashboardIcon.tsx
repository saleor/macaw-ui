import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const DashboardIcon = React.forwardRef(
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
          d="M13.5 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1V4Zm0 9a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-7ZM3 16a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4ZM3 4a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Z"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </SvgIcon>
    );
  }
);
