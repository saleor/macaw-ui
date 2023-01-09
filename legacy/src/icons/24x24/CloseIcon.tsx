import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const CloseIcon = React.forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.53 6.472a.75.75 0 1 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 0 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.06-1.06l-4.47-4.47 4.47-4.47a.75.75 0 0 0-1.06-1.06L12 10.942l-4.47-4.47Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
