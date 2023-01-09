import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const WarehouseLargeIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          d="M22.5 16V4a1 1 0 0 0-1-1H18m4.5 13h-2m2 0h2m-15 0V4a1 1 0 0 1 1-1H14M9.5 16h2m-2 0h-2m8.5 0v13m0-13h-4.5m4.5 0h4.5M16 29H4a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h3.5M16 29h12a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1h-3.5m-13 0v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4m13 0v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4M14 3v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3m-4 0h4"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
