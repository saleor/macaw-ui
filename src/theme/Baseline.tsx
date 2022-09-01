import { alpha } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

import { makeStyles } from "./styles";

const useStyles = makeStyles(
  (theme) => ({
    "@global": {
      "@import":
        "url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap')",
      "font-family": "'Source Sans Pro', sans-serif",

      // Putting them here, because MUI doesn't let putting own keys in
      // `overrides` objects
      "@keyframes hoverControlStart": {
        from: {
          transform: "scale(1)",
        },
        to: {
          transform: "scale(1.4)",
        },
      },
      "@keyframes hoverControl": {
        from: {
          transform: "scale(1.4)",
        },
        to: {
          transform: "scale(1.6)",
        },
      },

      "@keyframes hoverSwitchStart": {
        from: {
          boxShadow: `0 0 0 0 ${theme.palette.saleor.active[5]}`,
        },
        to: {
          boxShadow: `0 0 0 3px ${theme.palette.saleor.active[5]}`,
        },
      },
      "@keyframes hoverSwitch": {
        from: {
          boxShadow: `0 0 0 3px ${theme.palette.saleor.active[5]}`,
        },
        to: {
          boxShadow: `0 0 0 5px ${theme.palette.saleor.active[5]}`,
        },
      },

      ":root": {
        "--background-paper": theme.palette.background.paper,
        "--background-default": theme.palette.background.default,
      },

      // For some reason @import clause must be put on top
      // eslint-disable-next-line sort-keys
      "::selection": {
        background: alpha(theme.palette.primary.main, 0.2),
      },
      html: {
        fontSize: "100%",
      },
      a: {
        color: `${theme.palette.saleor.active[1]} !important`,
        textDecoration: "none",
      },
    },
  }),
  { name: "Baseline" }
);

export const Baseline: React.FC = () => {
  useStyles();

  return <CssBaseline />;
};
Baseline.displayName = "Baseline";
