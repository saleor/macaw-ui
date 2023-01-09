import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const BillingIcon = React.forwardRef(
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
          d="M17 10.5V21l-3.5-2-3.5 2-3.5-2L3 21V6a3 3 0 0 1 3-3h12.5M17 10.5h2.5a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2v0M17 10.5V6c0-2 1.5-3 1.5-3m-12 5h7m-7 3h7m-7 3h7"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
