import { createTheme } from "@vanilla-extract/css";

import { vars } from "./contract.css";

export const defaultLightTheme = createTheme(vars, {
  space: {
    1: "0.0625rem",
    2: "0.125rem",
    3: "0.25rem",
    4: "0.5rem",
    5: "0.75rem",
    6: "1rem",
    7: "1.25rem",
    8: "1.5rem",
    9: "1.875rem",
    10: "2rem",
    11: "2.25rem",
    12: "2.5rem",
    13: "3rem",
    14: "4rem",
    15: "5rem",
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
    1: "0.625rem",
    2: "0.6875rem",
    3: "0.75rem",
    4: "0.8125rem",
    5: "0.875rem",
    6: "0.9375rem",
    7: "1rem",
    8: "1.0625rem",
    9: "1.25rem",
    10: "1.375rem",
    11: "1.5rem",
    12: "1.625rem",
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
