import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const HowtoIcon = React.forwardRef(
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
          d="M3 18.667V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11.556a2 2 0 0 1-2 2H4.984a2 2 0 0 0-1.359.532L3 18.667Zm0 0v1.36c0 .55.23 1.074.633 1.448v0c.365.337.844.525 1.34.525h14.044a2 2 0 0 0 1.358-.532l.625-.58"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 7.5A2.5 2.5 0 1 1 12 10v0a.5.5 0 0 0-.5.5v1"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path d="M12.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" />
      </SvgIcon>
    );
  }
);
