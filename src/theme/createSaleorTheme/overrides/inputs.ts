import { ThemeOptions } from "@material-ui/core/styles";

function getInputBoxShadow(color: string) {
  return `0 0 0 3px ${color}`;
}

import { SaleorThemeColors, ThemeType } from "../types";

export const inputOverrides = (
  colors: SaleorThemeColors,
  mode: ThemeType
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
        WebkitTextFillColor: colors.main[1],
        boxShadow: `inset 0 0 0px 9999px ${colors.main[5]}`,
      },
      "&::placeholder": {
        opacity: "1 !important" as any,
      },
      color: colors.main[1],
    },
    underline: {
      "&:after": {
        borderBottomColor: colors.main[1],
      },
    },
  },
  MuiInputBase: {
    root: {
      borderRadius: "4px",
    },
    input: {
      "&$disabled": {
        color: colors.main[2],
      },
      "&::placeholder": {
        color: colors.main[3],
        opacity: "1 !important" as any,
      },
      borderRadius: "4px",
    },
  },
  MuiInputLabel: {
    formControl: {
      transform: "translate(0, 1.5px) scale(0.75)",
      transformOrigin: "top left",
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
        color: colors.main[2],
      },
      "&&&": {
        color: colors.main[3],

        "&$focused": {
          color: colors.main[1],
        },

        "&$disabled": {
          color: mode === "dark" ? colors.main[2] : colors.main[4],
        },
        "&$error": {
          "&$focused": {
            color: colors.fail.dark,
          },
          color: colors.fail.dark,
        },
      },
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
        backgroundColor:
          mode === "dark" ? colors.main[5] : colors.background.default,
        borderColor: mode === "dark" ? colors.main[4] : colors.main[6],
      },
      color: colors.main[1],
      padding: "23px 12px 10px 12px",
    },
    inputMultiline: {
      left: -2,
      padding: "10px 0",
      position: "relative",
    },
    multiline: {
      "&$disabled": {
        background:
          mode === "dark" ? colors.main[5] : colors.background.default,
        borderColor: mode === "dark" ? colors.main[4] : colors.main[6],
      },
    },
    root: {
      "& fieldset": {
        top: 0,
      },
      "& legend": {
        display: "none",
      },
      "&$disabled": {
        "& fieldset": {
          borderColor: `${colors.disabled} !important`,
        },
        "& input, & textarea": {
          backgroundColor: colors.background.default,
          color: colors.main[3],
        },
        boxShadow: "0 0 0 0 transparent !important",
        backgroundColor: colors.background.default,
      },
      "&$error": {
        boxShadow: getInputBoxShadow(
          mode === "dark" ? colors.fail.dark : colors.fail.light
        ),
      },
      "&:not($error):hover": {
        boxShadow: getInputBoxShadow(
          mode === "dark" ? colors.main[4] : colors.main[6]
        ),
        "& input": {
          color: colors.main[1],
        },
        "&&&": {
          "& fieldset": {
            borderColor: mode === "dark" ? colors.main[2] : colors.main[4],
          },
        },
      },
      backgroundColor: colors.background.paper,
      transition: "box-shadow 200ms",
      top: 0,
      fontWeight: 400,
    },
    notchedOutline: {
      // It's so much easier to put it here with important tag rather than
      // override in multiple places using cascade composition
      borderWidth: "1px !important",
    },
  },
});
