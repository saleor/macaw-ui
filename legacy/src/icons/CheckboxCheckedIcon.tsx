import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const CheckboxCheckedIcon = createSvgIcon(
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="1.5"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5711 4.7629C17.9653 4.34801 18.6267 4.34801 19.0209 4.7629L20.3455 6.1568C20.7122 6.54279 20.7122 7.14848 20.3455 7.53447L9.45066 19L3.65454 12.9002C3.28777 12.5143 3.28777 11.9086 3.65454 11.5226L4.97906 10.1287C5.3733 9.71378 6.03466 9.71378 6.4289 10.1287L9.45066 13.3087L17.5711 4.7629Z"
        fill="var(--background-paper)"
      />
    </svg>
  </>,
  "CheckboxCheckedIcon"
);
