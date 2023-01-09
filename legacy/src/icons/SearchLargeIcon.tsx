import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const SearchLargeIcon = createSvgIcon(
  <>
    <rect width="32" height="32" fill="var(--background-paper)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14ZM21.7488 23.1631C19.6582 24.9328 16.9537 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14C26 16.9537 24.9328 19.6582 23.1631 21.7488L29.7071 28.2929C30.0976 28.6834 30.0976 29.3166 29.7071 29.7071C29.3166 30.0976 28.6834 30.0976 28.2929 29.7071L21.7488 23.1631Z"
      fill="currentColor"
    />
  </>,
  "SearchLargeIcon"
);
(SearchLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
