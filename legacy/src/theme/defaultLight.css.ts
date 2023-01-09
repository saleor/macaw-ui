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
    9: "2rem",
    10: "2.5rem",
    11: "3rem",
    12: "4rem",
    13: "5rem",
  },
  colors: {
    foreground: {
      neutralTextPrimary: "hsla(211, 42%, 16%, 1)",
    },
    background: {},
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
