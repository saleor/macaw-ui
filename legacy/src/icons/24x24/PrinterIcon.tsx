import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const PrinterIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        viewBox="0 0 24 25"
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
          d="M6 17.002H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2.5m.5 10v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4m-12 0v-3.5m12 3.5h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2.5m-.5 10v-3.5m-12.5-6.5v-4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4m-13 0h13M6 13.502h12m-12 0H5m13 0h1m-14-3.5h2m2 7h6"
        />
      </SvgIcon>
    );
  }
);
