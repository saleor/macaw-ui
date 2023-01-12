import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const ColumnsIcon = React.forwardRef(
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
          d="M9 3.002H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4m0-18v18m0-18h6m-6 18h6m0 0h4a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2h-4m0 18v-18"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </SvgIcon>
    );
  }
);
