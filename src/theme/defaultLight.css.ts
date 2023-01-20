import { createTheme } from "@vanilla-extract/css";

import { vars } from "./contract.css";

export const defaultLightTheme = createTheme(vars, {
  space: {
    1: "1px",
    2: "2px",
    3: "4px",
    4: "8px",
    5: "12px",
    6: "16px",
    7: "20px",
    8: "24px",
    9: "30px",
    10: "32px",
    11: "36px",
    12: "40px",
    13: "48px",
    14: "64px",
    15: "80px",
  },
  colors: {
    foreground: {
      neutralTextPrimary: "hsla(211, 42%, 16%, 1)",
      disabled: "hsla(210, 13%, 56%, 100%)",
      inherit: "inherit",
    },
    background: {
      // FIXME: #208 migrate to proper color names when they are ready
      default: "hsla(0, 0%, 100%, 100%)",
      hover: "hsla(211, 42%, 16%, 0.1)",
      active: "hsla(211, 42%, 16%, 0.16)",
      disabled: "hsla(210, 13%, 56%, 100%)",
      focus: "hsla(211, 42%, 16%, 0.06)",
    },
    border: {},
  },
  fontSize: {
    1: "10px",
    2: "11px",
    3: "12px",
    4: "13px",
    5: "14px",
    6: "15px",
    7: "16px",
    8: "17px",
    9: "20px",
    10: "22px",
    11: "24px",
    12: "26px",
  },
  borderRadius: {
    1: "2px",
    2: "4px",
    3: "6px",
  },
  fontFamily: {
    body: "Rubik, sans-serif",
  },
  lineHeight: {
    heading: "1.2",
    text: "1.5",
  },
  fontWeight: {
    light: "370",
    regular: "400",
    medium: "470",
  },
});
