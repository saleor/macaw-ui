import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const MailIcon = createSvgIcon(
  <>
    <rect width="24" height="24" fill="var(--background-paper)" />
    <path
      d="M3.63039 6.61963C4.00478 6.24762 4.50239 6 5 6C6 6 18 6 19 6C19.5 6 20 6.25 20.375 6.625M3.63039 6.61963C3.2524 6.99522 3 7.49761 3 8C3 9 3 15 3 16C3 16.5024 3.2524 17.0048 3.63039 17.3804M3.63039 6.61963C3.63039 6.61963 7.13226 10.1215 9.01076 12M20.375 6.625C20.75 7 21 7.5 21 8C21 9 21 15 21 16C21 17 20 18 19 18C18 18 6 18 5 18C4.50239 18 4.00478 17.7524 3.63039 17.3804M20.375 6.625C20.375 6.625 16.8773 10.1227 15 12M9.01076 12C9.46071 12.4499 9.81752 12.8068 10.0108 13C11.0108 14 13 14 14 13C14.1933 12.8067 14.5501 12.4499 15 12M9.01076 12L3.63039 17.3804M15 12L20.3804 17.3804"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="transparent"
    />
  </>,
  "MailIcon"
);
