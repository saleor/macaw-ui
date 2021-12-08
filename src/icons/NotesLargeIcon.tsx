import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const NotesLargeIcon = createSvgIcon(
  <>
    <rect
      x="3"
      y="3"
      width="26"
      height="26"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="transparent"
    />
    <mask id="path-2-inside-1_892_5855" fill="var(--background-paper)">
      <rect x="7" y="7" width="6" height="6" rx="1" />
    </mask>
    <rect
      x="7"
      y="7"
      width="6"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth="4"
      mask="url(#path-2-inside-1_892_5855)"
      fill="transparent"
    />
    <rect x="7" y="19" width="18" height="2" rx="0.5" fill="currentColor" />
    <rect x="7" y="15" width="18" height="2" rx="0.5" fill="currentColor" />
    <rect x="7" y="23" width="18" height="2" rx="0.5" fill="currentColor" />
  </>,
  "NotesLargeIcon"
);
(NotesLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
