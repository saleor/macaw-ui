import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const TransferIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7H4m0 0 4-4M4 7l4 4m-4 6h16m0 0-4-4m4 4-4 4"
        />
      </SvgIcon>
    );
  }
);
