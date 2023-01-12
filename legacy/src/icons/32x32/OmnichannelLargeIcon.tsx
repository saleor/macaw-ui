import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const OmnichannelLargeIcon = React.forwardRef(
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
          cx={6}
          cy={7}
          r={2.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <circle
          cx={26}
          cy={7}
          r={2.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <circle
          cx={26}
          cy={25}
          r={2.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <circle
          cx={6}
          cy={25}
          r={2.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 28.5c2.7 0 5.2-.856 7.244-2.312.203.47.522.877.921 1.186A13.937 13.937 0 0 1 16 30c-3.047 0-5.867-.974-8.165-2.626.399-.31.718-.717.92-1.186A12.443 12.443 0 0 0 16 28.5ZM5.107 22.135A12.443 12.443 0 0 1 3.5 16c0-2.23.584-4.323 1.607-6.135a3 3 0 0 1-1.276-.792A13.936 13.936 0 0 0 2 16c0 2.52.666 4.885 1.831 6.927a3 3 0 0 1 1.276-.792Zm23.062.792a3 3 0 0 0-1.276-.792A12.443 12.443 0 0 0 28.5 16c0-2.23-.584-4.323-1.607-6.135a3 3 0 0 0 1.276-.792A13.935 13.935 0 0 1 30 16c0 2.52-.666 4.885-1.831 6.927ZM16 2c3.047 0 5.867.973 8.165 2.626a3.01 3.01 0 0 0-.92 1.186A12.443 12.443 0 0 0 16 3.5c-2.7 0-5.2.856-7.244 2.312a3.01 3.01 0 0 0-.921-1.186A13.936 13.936 0 0 1 16 2Z"
          fill="currentColor"
        />
        <path
          d="M23.25 16a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </SvgIcon>
    );
  }
);
