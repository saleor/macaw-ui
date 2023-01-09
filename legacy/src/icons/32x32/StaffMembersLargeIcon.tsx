import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const StaffmembersLargeIcon = React.forwardRef(
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
        <circle cx={16} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
        <path
          d="M20.902 20h-9.804a.098.098 0 0 1-.098-.098A3.902 3.902 0 0 1 14.902 16h2.196A3.902 3.902 0 0 1 21 19.902a.098.098 0 0 1-.098.098ZM11 26h4m-4-3h10m-3 3h3"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 5H8a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5m-5 0V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2m-5 0v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
