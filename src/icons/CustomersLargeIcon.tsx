import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const CustomersLargeIcon = createSvgIcon(
  <>
    <circle
      cx="16"
      cy="9"
      r="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="transparent"
    />
    <path
      d="M27.4286 29H4.57143C3.70355 29 3 28.2964 3 27.4286C3 22.2213 7.22132 18 12.4286 18H19.5714C24.7787 18 29 22.2213 29 27.4286C29 28.2964 28.2964 29 27.4286 29Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="transparent"
    />
  </>,
  "CustomersLargeIcon"
);
(CustomersLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
