import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const MigrateIcon = React.forwardRef(
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
          d="M19 11.5V7.828a2 2 0 0 0-.586-1.414l-2.828-2.828A2 2 0 0 0 14.172 3H7a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h9m0 0-2-2m2 2-2 2"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m8 15-.53-.53a.75.75 0 0 0 0 1.06L8 15Zm1.47 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm1.06-4a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM5.75 13a.75.75 0 0 0-1.5 0h1.5ZM7 21.75h10v-1.5H7v1.5ZM19.75 19v-2h-1.5v2h1.5ZM17 14.25H8v1.5h9v-1.5Zm-9.53 1.28 2 2 1.06-1.06-2-2-1.06 1.06Zm1.06 0 2-2-1.06-1.06-2 2 1.06 1.06ZM5.75 19v-6h-1.5v6h1.5Zm14-2A2.75 2.75 0 0 0 17 14.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM17 21.75A2.75 2.75 0 0 0 19.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-10-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75v-1.5Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
