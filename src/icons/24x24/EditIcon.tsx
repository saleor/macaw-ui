import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const EditIcon = React.forwardRef(
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
          d="m16 3 .53-.53a.75.75 0 0 0-1.06 0L16 3Zm4 4 .53.53a.75.75 0 0 0 0-1.06L20 7ZM10 17v.75a.75.75 0 0 0 .53-.22L10 17Zm-4 0h-.75c0 .414.336.75.75.75V17Zm0-4-.53-.53a.75.75 0 0 0-.22.53H6Zm9.47-9.47 4 4 1.06-1.06-4-4-1.06 1.06ZM10 16.25H6v1.5h4v-1.5ZM6.75 17v-4h-1.5v4h1.5Zm-.22-3.47 8-8-1.06-1.06-8 8 1.06 1.06Zm8-8 2-2-1.06-1.06-2 2 1.06 1.06Zm4.94.94-2 2 1.06 1.06 2-2-1.06-1.06Zm-2 2-8 8 1.06 1.06 8-8-1.06-1.06Zm-4-2.94 4 4 1.06-1.06-4-4-1.06 1.06Z"
          fill="currentColor"
        />
        <path
          d="M3 21h18"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }
);
