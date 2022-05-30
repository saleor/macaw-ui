import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const TaxesLargeIcon = React.forwardRef(
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
        <circle cx={12} cy={13} r={1} fill="currentColor" />
        <circle cx={16} cy={13} r={1} fill="currentColor" />
        <circle cx={20} cy={13} r={1} fill="currentColor" />
        <circle cx={12} cy={17} r={1} fill="currentColor" />
        <circle cx={16} cy={17} r={1} fill="currentColor" />
        <circle cx={20} cy={17} r={1} fill="currentColor" />
        <circle cx={12} cy={21} r={1} fill="currentColor" />
        <circle cx={16} cy={21} r={1} fill="currentColor" />
        <circle cx={16} cy={25} r={1} fill="currentColor" />
        <circle cx={20} cy={21} r={1} fill="currentColor" />
        <path
          d="M25 3H7a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask id="a" fill="currentColor">
          <rect x={9} y={6} width={14} height={4} rx={1} />
        </mask>
        <rect
          x={9}
          y={6}
          width={14}
          height={4}
          rx={1}
          stroke="currentColor"
          strokeWidth={3}
          mask="url(#a)"
        />
      </SvgIcon>
    );
  }
);
