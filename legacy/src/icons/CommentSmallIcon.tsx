import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const CommentSmallIcon = createSvgIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V13C17 13.5523 16.5523 14 16 14H10C9.78363 14 9.5731 14.0702 9.4 14.2L7 16V15C7 14.4477 6.55228 14 6 14H4C3.44772 14 3 13.5523 3 13V4ZM4 1C2.34315 1 1 2.34315 1 4V13C1 14.6569 2.34315 16 4 16H5V18C5 18.3788 5.214 18.725 5.55279 18.8944C5.89157 19.0638 6.29698 19.0273 6.6 18.8L10.3333 16H16C17.6569 16 19 14.6569 19 13V4C19 2.34315 17.6569 1 16 1H4ZM6 7C6 6.44772 6.44772 6 7 6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H7C6.44772 8 6 7.55228 6 7ZM6 10C6 9.44771 6.44772 9 7 9H13C13.5523 9 14 9.44771 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10Z"
    fill="currentColor"
  />,
  "CommentSmallIcon"
);
(CommentSmallIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 20 20",
};