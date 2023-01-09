import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const MoreSmallIcon = React.forwardRef(
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
          d="M5.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
