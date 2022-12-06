import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => {
    const isDarkMode = theme.palette.type === "dark";
    const colors = theme.palette.saleor
    const borderColor = isDarkMode ? colors.main[4] : colors.main[6]
  
    return {
      expandIcon: {
        "&:hover, &.Mui-focusVisible, &$hover, &$active": {
          color: colors.main[1],
          border: `1px solid ${borderColor}`,
        },
        background: "transparent",
        borderRadius: 4,
        color: colors.main[3],
        border: `1px solid ${borderColor}`,
        padding: 3,
        transition: "200ms",
      }
    }
  },
  {
    name: "Accordion",
  }
);

export default useStyles;
