import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const DigitalLargeIcon = React.forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.894 5.888a.25.25 0 0 1 .224-.138h17.764a.25.25 0 0 1 .224.138l2.68 5.362H7.3a1.5 1.5 0 1 0 0 1.5h3.95v5.836c0 1.559 1.885 2.34 2.987 1.237l1.293-1.293a.75.75 0 1 0-1.06-1.06l-1.293 1.293a.25.25 0 0 1-.427-.177V12.75h6.5v5.45a1.5 1.5 0 1 0 1.5 0v-5.45h7.5V27a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25v-7.2a1.5 1.5 0 1 0-1.5 0V27c0 .966.784 1.75 1.75 1.75h23A1.75 1.75 0 0 0 29.75 27V12a.75.75 0 0 0-.08-.335l-3.223-6.448a1.75 1.75 0 0 0-1.565-.967H7.118a1.75 1.75 0 0 0-1.565.967L4.329 7.665a.75.75 0 0 0 1.342.67l1.223-2.447Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
