import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const CustomerLargeIcon = React.forwardRef(
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
        <circle
          cx={16}
          cy={9}
          r={5.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          d="M27.429 29H4.57A1.571 1.571 0 0 1 3 27.429 9.429 9.429 0 0 1 12.429 18h7.142A9.429 9.429 0 0 1 29 27.429c0 .867-.704 1.571-1.571 1.571Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
