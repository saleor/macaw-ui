import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const DownloadIcon = createSvgIcon(
  <>
    <rect width="24" height="24" fill="var(--background-paper)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 20C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22L21 22C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20L3 20ZM13 3C13 2.44771 12.5523 2 12 2C11.4477 2 11 2.44771 11 3L11 14.5858L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L16.7071 13.7071C17.0976 13.3166 17.0976 12.6834 16.7071 12.2929C16.3166 11.9024 15.6834 11.9024 15.2929 12.2929L13 14.5858L13 3Z"
      fill="currentColor"
    />
  </>,
  "DownloadIcon"
);
