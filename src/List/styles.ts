import { CSSProperties } from "react";
import { makeStyles } from "..";

export const useStyles = makeStyles(
  (theme) => {
    const dividerStyles: CSSProperties = {
      content: "''",
      height: 1,
      position: "absolute",
      top: 0,
      backgroundColor: theme.palette.background.default,
      left: 32,
      width: "calc(100% - 64px)",
    };

    return {
      row: {
        gap: theme.spacing(4),
        minHeight: 72,
        padding: theme.spacing(0, 4),
        position: "relative",
      },
      rowBody: {
        "&:before": dividerStyles,
        "&:last-child:after": {
          ...dividerStyles,
          top: "100%",
        },
        transition: theme.transitions.create("background-color", {
          duration: theme.transitions.duration.shorter,
        }),
        ...theme.typography.body1,
      },
      rowCheckbox: {
        paddingLeft: theme.spacing(2.5),
      },
      rowFoot: {
        padding: theme.spacing(0, 4),
      },
      rowHead: {
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
      },
      rowHover: {
        "&$rowBody:hover": {
          "&:before, &:after, & + $rowBody:before": {
            backgroundColor: "transparent",
          },
          backgroundColor: theme.palette.saleor.active[5],
        },
      },
      rowNoPadding: {},
      rowBodySelected: {},
      cell: {},
      cellBody: {
        padding: theme.spacing(1, 0),
      },
      cellHeader: {},
    };
  },
  { name: "List" }
);
