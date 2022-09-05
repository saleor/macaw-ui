import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    buttonDefault: {
      fontWeight: 600,
      borderRadius: "4px",
      boxShadow: "none",
      textTransform: "none",

      "&&": {
        "&:hover, &.Mui-focusVisible, &:active": {
          boxShadow: "none",
        },
      },
    },

    primary: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          color: theme.palette.saleor.active[1],
          borderColor: theme.palette.saleor.active[1],
          background: "transparent",
        },
        "&:active": {
          background: theme.palette.saleor.active[5],
        },
      },
      background: theme.palette.saleor.main[1],
      border: `1px solid ${theme.palette.saleor.main[1]}`,
    },
    primaryDisabled: {
      "&&&": {
        background: theme.palette.saleor.main[5],
        border: `1px solid ${theme.palette.saleor.main[5]}`,
      },
    },
    primaryError: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          color: theme.palette.saleor.errorAction[1],
          borderColor: theme.palette.saleor.errorAction[1],
          background: "transparent",
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[5],
        },
      },
      background: theme.palette.saleor.errorAction[1],
      border: `1px solid ${theme.palette.saleor.errorAction[1]}`,
    },
    primaryErrorDisabled: {
      "&&&": {
        background: theme.palette.saleor.errorAction[5],
        border: `1px solid ${theme.palette.saleor.errorAction[5]}`,
        color: "white",
      },
    },

    secondary: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          color: theme.palette.saleor.main[1],
          borderColor: theme.palette.saleor.main[1],
          background: "transparent",
        },
        "&:active": {
          background: theme.palette.saleor.main[4],
        },
      },
      background: "transparent",
      border: `1px solid ${theme.palette.saleor.main[6]}`,
      color: theme.palette.saleor.main[1],
    },
    secondaryDisabled: {
      "&&&": {
        background: "transparent",
        border: `1px solid ${theme.palette.saleor.disabled}`,
        color: theme.palette.saleor.disabled,
      },
    },
    secondaryError: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          color: theme.palette.saleor.errorAction[1],
          borderColor: theme.palette.saleor.errorAction[1],
          background: "transparent",
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[5],
        },
      },
      background: "transparent",
      border: `1px solid ${theme.palette.saleor.errorAction[4]}`,
      color: theme.palette.saleor.errorAction[2],
    },
    secondaryErrorDisabled: {
      "&&&": {
        background: "transparent",
        border: `1px solid ${theme.palette.saleor.errorAction[5]}`,
        color: theme.palette.saleor.errorAction[5],
      },
    },

    tertiary: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          color: theme.palette.saleor.main[1],
          borderColor: theme.palette.saleor.main[1],
          background: "transparent",
        },
        "&:active": {
          background: theme.palette.saleor.main[6],
        },
      },
      background: "transparent",
      border: `1px solid ${theme.palette.saleor.main[6]}`,
      color: theme.palette.saleor.main[1],
    },
    tertiaryDisabled: {
      "&&&": {
        background: "transparent",
        border: "none",
        color: theme.palette.saleor.disabled,
      },
    },
    tertiaryError: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          color: theme.palette.saleor.errorAction[1],
          borderColor: theme.palette.saleor.errorAction[1],
          background: "transparent",
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[5],
        },
      },
      background: "transparent",
      border: `1px solid ${theme.palette.saleor.errorAction[4]}`,
      color: theme.palette.saleor.errorAction[2],
    },
    tertiaryErrorDisabled: {
      "&&&": {
        background: "transparent",
        border: "none",
        color: theme.palette.saleor.errorAction[5],
      },
    },
  }),
  {
    name: "Button",
  }
);

export default useStyles;
