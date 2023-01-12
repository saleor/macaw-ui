import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const EnvironmentIcon = React.forwardRef(
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
          d="M3 10h18M3 10v5a2 2 0 0 0 2 2h7m-9-7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5m0 0v5a2 2 0 0 1-2 2h-7m0 0v4m0 0H6m6 0h7"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
