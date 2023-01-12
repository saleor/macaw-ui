import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const SearchSmallIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75 9a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM9 2.25a6.75 6.75 0 1 0 4.213 12.024l3.257 3.256a.75.75 0 1 0 1.06-1.06l-3.256-3.257A6.75 6.75 0 0 0 9 2.25Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
