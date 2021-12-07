import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const NoConnectionIcon = createSvgIcon(
  <>
    <circle cx="12" cy="18" r="1" fill="currentColor" />
    <path
      d="M7 14.5C7 14.5 7.35787 14.05 8 13.5317M17 14.5C17 14.5 16.1511 13.4325 14.7224 12.6926"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 10C3 10 6.57831 6 12 6M21 10C21 10 19.9552 8.83211 18.1394 7.75846"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M17.8599 4.01054C18.1418 3.53565 17.9854 2.92211 17.5105 2.64015C17.0357 2.35818 16.4221 2.51458 16.1401 2.98946L17.8599 4.01054ZM6.64015 18.9895C6.35818 19.4643 6.51458 20.0779 6.98946 20.3599C7.46435 20.6418 8.07789 20.4854 8.35985 20.0105L6.64015 18.9895ZM16.1401 2.98946L6.64015 18.9895L8.35985 20.0105L17.8599 4.01054L16.1401 2.98946Z"
      fill="currentColor"
    />
  </>,
  "NoConnectionIcon"
);
