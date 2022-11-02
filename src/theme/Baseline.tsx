import CssBaseline from "@material-ui/core/CssBaseline";
import { fade } from "@material-ui/core/styles";
import React from "react";

import { makeStyles } from "./styles";

const useStyles = makeStyles(
  (theme) => ({
    "@global": {
      "@import": "url('https://rsms.me/inter/inter.css')",

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
        background: fade(theme.palette.primary.main, 0.2),
      },
      html: {
        fontSize: "58.4%",
      },
      a: {
        color: theme.palette.primary.main,
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
