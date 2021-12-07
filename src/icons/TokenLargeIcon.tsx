import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const TokenLargeIcon = createSvgIcon(
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 25.3284L14.8138 14.5146L14.3953 13.3266C14.1399 12.6013 14 11.8191 14 11C14 7.13401 17.134 4 21 4C24.866 4 28 7.13401 28 11C28 14.866 24.866 18 21 18C20.2894 18 19.6071 17.8948 18.9657 17.7004L17.8188 17.3528L15.1716 20H12V22H10V24H7.5V27.1716L6.67157 28H4V25.3284ZM14 22H16L18.3856 19.6144C19.213 19.8652 20.0907 20 21 20C25.9706 20 30 15.9706 30 11C30 6.02944 25.9706 2 21 2C16.0294 2 12 6.02944 12 11C12 12.0486 12.1793 13.0552 12.509 13.991L2.29289 24.2071C2.10536 24.3946 2 24.649 2 24.9142V28.5858C2 28.851 2.10536 29.1054 2.29289 29.2929L2.70711 29.7071C2.89464 29.8946 3.149 30 3.41421 30H7.08579C7.351 30 7.60536 29.8946 7.79289 29.7071L9.5 28V26H12V24H14V22ZM22.5 12C23.8807 12 25 10.8807 25 9.5C25 8.11929 23.8807 7 22.5 7C21.1193 7 20 8.11929 20 9.5C20 10.8807 21.1193 12 22.5 12Z"
      fill="currentColor"
    />
  </>,
  "TokenLargeIcon"
);
(TokenLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
