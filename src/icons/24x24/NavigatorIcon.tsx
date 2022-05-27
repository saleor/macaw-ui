import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const NavigatorIcon = React.forwardRef(
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
          d="M6.469 13.238 12.831 2.9c.28-.455.982-.213.923.317l-.692 6.228a.5.5 0 0 0 .497.555h3.58a.5.5 0 0 1 .434.748l-6.408 11.213c-.267.468-.985.239-.931-.298l.711-7.113a.5.5 0 0 0-.498-.55H6.896a.5.5 0 0 1-.426-.762Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
