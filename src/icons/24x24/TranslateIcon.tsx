import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const TranslateIcon = React.forwardRef(
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
        <path
          d="M4.163 17.135c2.235-2.106 3.934-3.815 5.225-5.279M13.352 4.5h3.243m-3.243 0H9.568m3.784 0c-.266 2.453-1.135 4.148-3.964 7.356M2 4.5h7.568m0 0V3m-.18 8.856c1.1 1.109 1.736 1.656 2.883 2.576m-2.883-2.576C8.26 10.719 6.5 8.5 6.325 7.406m7.027 13.513 1.441-3.784M22 20.92l-1.441-3.784m-5.766 0 2.883-7.567 2.883 7.567m-5.766 0h5.766"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
