import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const ExpendableIcon = React.forwardRef(
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
          d="M7 7h13m-10 5h10m-10 5h10"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <circle cx={4} cy={7} r={1} fill="currentColor" />
        <circle cx={7} cy={12} r={1} fill="currentColor" />
        <circle cx={7} cy={17} r={1} fill="currentColor" />
      </SvgIcon>
    );
  }
);
