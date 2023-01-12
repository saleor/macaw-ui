import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const FilteringIcon = React.forwardRef(
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
          d="M20 3H4a1 1 0 0 0-1 1v3.086a1 1 0 0 0 .293.707l5.914 5.914a1 1 0 0 1 .293.707V21l4.371-1.749a1 1 0 0 0 .629-.928v-3.909a1 1 0 0 1 .293-.707l5.914-5.914A1 1 0 0 0 21 7.086V4a1 1 0 0 0-1-1Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
