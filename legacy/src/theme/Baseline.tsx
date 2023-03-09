import CssBaseline from "@material-ui/core/CssBaseline";
import { alpha } from "@material-ui/core/styles";
import React from "react";

import InterBold from "./fonts/Inter-Bold.woff2";
import InterMedium from "./fonts/Inter-Medium.woff2";
import InterRegular from "./fonts/Inter-Regular.woff2";
import InterSemiBold from "./fonts/Inter-SemiBold.woff2";
import { makeStyles } from "./styles";

const useStyles = makeStyles(
  (theme) => ({
    "@global": {
      "@font-face": [
        {
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 400,
          src: `url(${InterRegular}) format("woff2")`,
          fontDisplay: "swap",
        },
        {
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 500,
          src: `url(${InterMedium}) format("woff2")`,
          fontDisplay: "swap",
        },
        {
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 600,
          src: `url(${InterSemiBold}) format("woff2")`,
          fontDisplay: "swap",
        },
        {
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 700,
          src: `url(${InterBold}) format("woff2")`,
          fontDisplay: "swap",
        },
      ],
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
        colorScheme: theme.palette.type,
      },

      // For some reason @import clause must be put on top
      // eslint-disable-next-line sort-keys
      "::selection": {
        background: alpha(theme.palette.primary.main, 0.2),
      },
      html: {
        fontSize: "58.4%",
      },
      a: {
        color: "inherit",
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
