import { fade } from "@material-ui/core/styles";

import { makeStyles } from "../theme";
import { StatusChipProps } from "./types";

const useStyles = makeStyles<StatusChipProps, "label" | "root">(
  (theme) => ({
    label: {
      color: ({ variant }) => {
        switch (variant) {
          case "success":
            return theme.palette.success.main;
          case "warning":
            return theme.palette.warning.main;
          case "neutral":
            return theme.palette.text.hint;
          case "error":
            return theme.palette.error.main;
        }
      },
      fontSize: 16,
      fontWeight: 700,
      padding: theme.spacing(0, 2),
      textTransform: "uppercase",
    },
    root: {
      "&:not(:first-child)": {
        marginLeft: theme.spacing(2),
      },
      background: ({ variant }) => {
        switch (variant) {
          case "success":
            return fade(theme.palette.success.main, 0.2);
          case "warning":
            return fade(theme.palette.warning.main, 0.2);
          case "neutral":
            return fade(theme.palette.text.hint, 0.05);
          case "error":
            return fade(theme.palette.error.main, 0.15);
        }
      },
      borderRadius: 20,
      cursor: "inherit",
      height: ({ size }) => (size === "lg" ? 40 : 32),
    },
  }),
  {
    name: "StatusChip",
  }
);
export default useStyles;
