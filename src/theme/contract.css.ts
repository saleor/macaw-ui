import { createGlobalThemeContract } from "@vanilla-extract/css";

const toKebabCase = (str: string) =>
  str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

export const vars = createGlobalThemeContract(
  {
    space: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
    },
    colors: {
      foreground: {
        neutralTextPrimary: null,
      },
      background: {},
      border: {},
    },
    fontSize: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
    },
    borderRadius: {
      1: null,
      2: null,
      3: null,
    },
    fontFamily: {
      body: null,
    },
    lineHeight: {
      heading: null,
      text: null,
    },
    fontWeight: {
      light: null,
      regular: null,
      medium: null,
    },
  },
  (_value, path) => `${path.map(toKebabCase).join("-")}`
);
