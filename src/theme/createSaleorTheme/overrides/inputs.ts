import { fade, ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const inputOverrides = (
  colors: SaleorThemeColors
): ThemeOptions["overrides"] => ({
  MuiFormHelperText: {
    root: {
      "&$error": {
        color: colors.fail.dark,
      },
    },
  },
  MuiInput: {
    input: {
      "&:-webkit-autofill": {
        WebkitTextFillColor: colors.font.default,
        boxShadow: `inset 0 0 0px 9999px ${colors.autofill}`,
      },
      "&::placeholder": {
        opacity: "1 !important" as any,
      },
      color: colors.font.default,
    },
    underline: {
      "&:after": {
        borderBottomColor: colors.primary,
      },
    },
  },
  MuiInputBase: {
    root: {
      borderRadius: "4px",
    },
    input: {
      "&$disabled": {
        color: colors.input.disabledText,
      },
      "&::placeholder": {
        color: colors.font.gray,
        opacity: "1 !important" as any,
      },
      borderRadius: "4px",
    },
  },
  MuiInputLabel: {
    formControl: {
      transform: "translate(0, 1.5px) scale(0.75)",
      transformOrigin: "top left" as "to p left",
      width: "100%",
    },
    outlined: {
      "&$shrink": {
        transform: "translate(12px, 9px) scale(0.75)",
      },
      transform: "translate(14px, 18px) scale(1)",
    },
    root: {
      "&&$disabled": {
        color: colors.main[4],
      },
      "&$error": {
        "&$focused": {
          color: colors.fail.dark,
        },
        color: colors.fail.dark,
      },
      "&&$focused": {
        "&:not($error)": {
          color: colors.primary,
        },
      },
      "&:not($error):hover label": {
        color: colors.main[4],
      },
      color: colors.main[3],
    },
    shrink: {
      // Negates x0.75 scale
      width: "133%",
    },
  },
  MuiOutlinedInput: {
    input: {
      "&:-webkit-autofill": {
        borderRadius: 4,
        boxShadow: "0 0 0px 1000px rgba(19, 190, 187, 0.1) inset",
      },
      "&&$disabled": {
        backgroundColor: colors.background.default,
      },
      color: colors.input.text,
      padding: "23px 12px 10px 12px",
    },
    inputMultiline: {
      left: -2,
      padding: "10px 0",
      position: "relative",
    },
    root: {
      "& fieldset": {
        "&&:not($error)": {
          borderColor: colors.input.border,
        },
        top: 0,
      },
      "& legend": {
        display: "none",
      },
      "&$disabled": {
        "& fieldset": {
          borderColor: `${colors.input.disabled} !important`,
        },
        "& input": {
          backgroundColor: colors.input.disabledBackground,
          color: colors.input.disabledText,
        },
        boxShadow: `0 0 0 0 transparent !important`,
      },
      "&$error": {
        "&$focused": {
          "&:hover": {
            boxShadow: `0px 0px 0px 3px ${colors.fail.mid}`,
          },
          "& fieldset": {
            borderColor: colors.fail.dark,
          },
          boxShadow: `0px 0px 0px 3px ${colors.fail.mid}`,
        },
        "&:hover": {
          "& fieldset": {
            borderColor: colors.fail.dark,
          },
          boxShadow: `0px 0px 0px 3px ${colors.fail.light}`,
        },
      },
      "&$focused": {
        "&, &:hover": {
          boxShadow: `0px 0px 0px 3px ${fade(colors.primary, 0.6)}`,
        },
        "& input": {
          "& fieldset": {
            borderColor: colors.primary,
          },
          "&::placeholder": {
            opacity: [[1], "!important"] as any,
          },
          color: colors.font.default,
        },
      },
      "&:hover": {
        boxShadow: `0px 0px 0px 3px ${fade(colors.primary, 0.1)}`,
        "& input": {
          color: colors.font.default,
        },
        "&&&": {
          "& fieldset": {
            borderColor: colors.primary,
          },
          "&$error fieldset": {
            borderColor: colors.input.error,
          },
        },
      },
      backgroundColor: colors.background.paper,
      transition: "box-shadow 200ms",
      top: 0,
      fontWeight: 500,
    },
    notchedOutline: {
      border: `1px solid ${colors.input.border}`,
      // It's so much easier to put it here with important tag rather than
      // override in multiple places using cascade composition
      borderWidth: "1px !important",
    },
  },
});
