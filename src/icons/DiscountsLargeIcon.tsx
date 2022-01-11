import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const DiscountLargeIcon = createSvgIcon(
  <>
    <path
      d="M4 16L16.4142 3.58579C16.7893 3.21071 17.298 3 17.8284 3L24.1716 3C24.702 3 25.2107 3.21071 25.5858 3.58579L28.4142 6.41421C28.7893 6.78929 29 7.29799 29 7.82843V14.1716C29 14.702 28.7893 15.2107 28.4142 15.5858L16 28M4 16L3.58579 16.4142C3.21071 16.7893 3 17.298 3 17.8284L3 20.6716C3 21.202 3.21071 21.7107 3.58579 22.0858L9.91421 28.4142C10.2893 28.7893 10.798 29 11.3284 29H14.1716C14.702 29 15.2107 28.7893 15.5858 28.4142L16 28M4 16L16 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="transparent"
    />
    <circle
      cx="22.5"
      cy="9.5"
      r="2.5"
      stroke="currentColor"
      strokeWidth="2"
      fill="transparent"
    />
  </>,
  "DiscountLargeIcon"
);
(DiscountLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
