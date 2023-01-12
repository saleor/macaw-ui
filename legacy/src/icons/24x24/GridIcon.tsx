import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const GridIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <rect
          x={3}
          y={3}
          width={7}
          height={7}
          rx={1}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <rect
          x={14}
          y={3}
          width={7}
          height={7}
          rx={1}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <rect
          x={3}
          y={14}
          width={7}
          height={7}
          rx={1}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <rect
          x={14}
          y={14}
          width={7}
          height={7}
          rx={1}
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </SvgIcon>
    );
  }
);
