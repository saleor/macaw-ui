import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const AddEnvironmentIcon = React.forwardRef(
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
          d="M5.5 10H3m0 0v5a2 2 0 0 0 2 2h7m-9-7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5m0 0v5a2 2 0 0 1-2 2h-7m9-7h-2.5M12 17v4m0 0H6m6 0h7M12 7.002v6m3-3H9"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
