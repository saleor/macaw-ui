import { fade } from "@material-ui/core/styles/colorManipulator";

import { SaleorThemeColors } from "./createSaleorTheme";

export const dark: SaleorThemeColors = {
  alert: {
    paper: {
      error: "#E0444E",
      info: "#2E2F31",
      success: "#5DC292",
      warning: "#E29A2E",
    },
    icon: {
      error: "#FE6E76",
      info: "#FAFAFA",
      success: "#5DC292",
      warning: "#FFB84E",
    },
  },
  highlightInactive: {
    default: "#78797A",
  },
  autofill: "#5D5881",
  background: {
    default: "#1D1E1F",
    paper: "#2E2F31",
  },
  checkbox: {
    default: "#FFFFFF",
  },
  divider: "#252728",
  error: "#C22D74",
  font: {
    button: "#202124",
    default: "#FCFCFC",
    gray: "#9E9D9D",
    textButton: "#FFFFFF",
    textDisabled: "#FCFCFC",
  },
  gray: {
    default: "#202124",
    disabled: "rgba(32, 33, 36, 0.6)",
  },

  active: {
    1: "#056DFF",
    2: "#378AFF",
    3: "#68A7FF",
    4: "#C1DBFF",
    5: "#E6F0FF",
  },
  main: {
    1: "#FCFCFC",
    2: "rgba(252, 252, 252, 0.8)",
    3: "rgba(252, 252, 252, 0.6)",
    4: "rgba(252, 252, 252, 0.4)",
  },
  fail: {
    dark: "#B65757",
    mid: "#FEADAD",
    light: "#FEDEDE",
  },

  disabled: "#CCDDDD",
  paperBorder: "#252728",
  primary: "#13BEBB",
  secondary: "#21125E",
  success: "#5DC292",
  theme: "dark",
};
export const light: SaleorThemeColors = {
  alert: {
    paper: {
      error: "#FFD6D9",
      info: "#FFFFFF",
      success: "#DFF3E9",
      warning: "#FFF4E4",
    },
    icon: {
      error: "#FE6E76",
      info: "#28234A",
      success: "#5DC292",
      warning: "#FFB84E",
    },
  },
  highlightInactive: {
    default: "#C8C8C8",
  },
  autofill: "#f4f6c5",
  background: {
    default: "#EFF5F8",
    paper: "#FFFFFF",
  },
  checkbox: {
    default: "#616161",
  },
  divider: "#EAEAEA",
  error: "#FE6D76",
  font: {
    button: "#FFFFFF",
    default: "#28234A",
    gray: fade("#28234A", 0.6),
    textButton: "#06847B",
    textDisabled: fade("#28234A", 0.4),
  },
  gray: {
    default: "#C8C8C8",
    disabled: "#C0CFE2",
  },

  active: {
    1: "#056DFF",
    2: "#378AFF",
    3: "#68A7FF",
    4: "#C1DBFF",
    5: "#E6F0FF",
  },
  main: {
    1: "#28234A",
    2: "rgba(40, 35, 74, 0.8)",
    3: "rgba(40, 35, 74, 0.6)",
    4: "rgba(40, 35, 74, 0.4)",
  },
  fail: {
    dark: "#B65757",
    mid: "#FEADAD",
    light: "#FEDEDE",
  },
  errorAction: {
    1: "#B63755",
    2: "#D36474",
    3: "#E9878B",
    4: "#F7B6B2",
    5: "#FBDDD8",
  },

  disabled: "#CCDDDD",
  paperBorder: "#EAEAEA",
  primary: "#056DFF",
  secondary: "#FFFFFF",
  success: "#5DC292",
  theme: "light",
};
