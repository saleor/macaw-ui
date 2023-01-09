import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const CustomersIcon = React.forwardRef(
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
        <circle cx={12} cy={7} r={4} stroke="currentColor" strokeWidth={1.5} />
        <path
          d="M20.83 21H3.17a.17.17 0 0 1-.17-.17A6.83 6.83 0 0 1 9.83 14h4.34A6.83 6.83 0 0 1 21 20.83a.17.17 0 0 1-.17.17Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
