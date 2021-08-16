import { makeStyles } from "../theme";
import { TooltipProps } from "./Tooltip";

const useStyles = makeStyles<TooltipProps, "tooltip">(
  (theme) => ({
    tooltip: {
      backgroundColor: (props) => {
        switch (props.variant) {
          case "info":
            return theme.palette.info.main;
          case "success":
            return theme.palette.success.main;
          case "warning":
            return theme.palette.warning.main;
          case "error":
            return theme.palette.error.main;
          default:
            return theme.palette.info.main;
        }
      },
    },
  }),
  {
    name: "Tooltip",
  }
);

export default useStyles;
