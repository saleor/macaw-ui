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
      rowFoot: {
        padding: theme.spacing(0, 4),
      },
      rowHead: {
        "& $cell": {
          "&:first-child": {
            paddingLeft: theme.spacing(4),
          },
          "&:last-child": {
            paddingRight: theme.spacing(4),
          },
        },
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
      cellAction: {
        "&$cell:last-child": {
          paddingRight: theme.spacing(3),
        },
        display: "flex",
        gap: theme.spacing(1),
        justifyContent: "flex-end",
      },
      cellBody: {
        "&:first-child": {
          paddingLeft: theme.spacing(4),
        },
        "&:last-child": {
          paddingRight: theme.spacing(4),
        },
        padding: theme.spacing(1, 0),
      },
      cellCheckbox: {
        "&$cell:first-child": {
          paddingLeft: `calc(${theme.spacing(2)} + 2px)`,
        },
      },
      cellHeader: {},
    };
  },
  { name: "List" }
);
