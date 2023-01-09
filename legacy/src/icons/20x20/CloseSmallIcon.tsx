import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const CloseSmallIcon = React.forwardRef(
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
          d="M14.53 6.53a.75.75 0 0 0-1.06-1.06L10 8.94 6.53 5.47a.75.75 0 0 0-1.06 1.06L8.94 10l-3.47 3.47a.75.75 0 1 0 1.06 1.06L10 11.06l3.47 3.47a.75.75 0 1 0 1.06-1.06L11.06 10l3.47-3.47Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
