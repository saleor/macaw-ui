import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const ProductLargeIcon = createSvgIcon(
  <path
    d="M3 10V26C3 27.1046 3.89543 28 5 28H27C28.1046 28 29 27.1046 29 26V10M3 10L6.40627 4.8906C6.7772 4.3342 7.40166 4 8.07037 4H23.9296C24.5983 4 25.2228 4.3342 25.5937 4.8906L29 10M3 10H12M29 10H20M12 10V18.7929C12 19.2383 12.5386 19.4614 12.8536 19.1464L15.2929 16.7071C15.6834 16.3166 16.3166 16.3166 16.7071 16.7071L19.1464 19.1464C19.4614 19.4614 20 19.2383 20 18.7929V10M12 10H20"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    fill="transparent"
  />,
  "ProductLargeIcon"
);
(ProductLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
