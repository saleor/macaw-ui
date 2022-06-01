import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const EyeClosedIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={24}
        height={24}
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
          d="M18.5 4.375a.625.625 0 0 0-1-.75l-2.693 3.59A11.965 11.965 0 0 0 12 6.876c-2.642 0-5.005.923-6.703 1.968-.85.523-1.548 1.086-2.043 1.598a4.647 4.647 0 0 0-.603.748c-.137.22-.276.507-.276.811 0 .304.14.59.276.81.15.24.356.494.603.75.495.511 1.194 1.074 2.043 1.597.753.464 1.637.903 2.618 1.248L5.5 19.625a.625.625 0 1 0 1 .75l2.693-3.59c.884.213 1.826.34 2.807.34 2.642 0 5.005-.923 6.703-1.968.85-.523 1.548-1.086 2.043-1.598.247-.255.454-.508.603-.748.137-.22.276-.507.276-.811 0-.304-.14-.59-.276-.81a4.65 4.65 0 0 0-.603-.75c-.495-.511-1.194-1.074-2.043-1.597a13.73 13.73 0 0 0-2.618-1.248l2.415-3.22zm-4.781 4.291a3.75 3.75 0 0 0-4.438 5.917l4.438-5.917zm-3.438 6.668 4.438-5.917a3.75 3.75 0 0 1-4.438 5.917zM3.633 12a.97.97 0 0 0 .08.15c.088.143.233.327.44.54.41.426 1.024.926 1.8 1.403.632.389 1.361.757 2.163 1.056A4.98 4.98 0 0 1 7 12a4.98 4.98 0 0 1 1.116-3.149c-.802.3-1.531.667-2.163 1.056-.776.477-1.39.977-1.8 1.402a3.43 3.43 0 0 0-.44.54.97.97 0 0 0-.08.151zm14.414 2.093c-.632.389-1.361.757-2.163 1.056A4.979 4.979 0 0 0 17 12a4.98 4.98 0 0 0-1.116-3.149c.802.3 1.531.667 2.163 1.056.776.477 1.39.977 1.8 1.402.207.214.352.398.44.54a.967.967 0 0 1 .08.151.967.967 0 0 1-.08.15 3.425 3.425 0 0 1-.44.54c-.41.426-1.024.926-1.8 1.403z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
