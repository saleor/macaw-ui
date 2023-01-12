import React from "react";

export const PageTabPanel: React.FC<{ show: boolean }> = ({
  children,
  show,
}) => (
  <div
    style={{
      display: show ? "block" : "none",
    }}
  >
    {children}
  </div>
);
PageTabPanel.displayName = "PageTabPanel";
