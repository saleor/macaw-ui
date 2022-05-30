import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const FilteringLargeIcon = React.forwardRef(
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
          d="M3 9.5V4a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v5.5m-26 0 8.707 8.707a1 1 0 0 1 .293.707v8.643a1 1 0 0 0 1.351.936l6-2.25a1 1 0 0 0 .649-.936v-6.393a1 1 0 0 1 .293-.707L29 9.5m-26 0h26"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
