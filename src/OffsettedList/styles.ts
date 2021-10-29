import { makeStyles } from "..";
import { BaseListItemCellClassKey, BaseListItemClassKey } from "../BaseList";

export const useStyles = makeStyles<
  {},
  BaseListItemCellClassKey | BaseListItemClassKey | "body"
>(
  (theme) => ({
    row: {
      alignItems: "center",
      display: "grid",
      minHeight: 48,
      gap: theme.spacing(4),
      padding: theme.spacing(0, 4),
    },
    rowBody: {
      "&:first-child": {
        marginTop: theme.spacing(1),
      },
      background: theme.palette.background.paper,
      borderRadius: 6,
      boxShadow: theme.shadows[0],
      height: 90,
      margin: theme.spacing(1.5, 0),
      transition: `${theme.transitions.create(
        "box-shadow"
      )},${theme.transitions.create("background", {
        delay: 0,
        duration: theme.transitions.duration.shortest,
      })}`,
      ...theme.typography.body1,
    },
    rowCheckbox: {
      paddingLeft: theme.spacing(2.5),
    },
    rowFoot: {},
    rowHead: {},
    rowHover: {
      "&$rowBody:hover": {
        "& $cell:first-child": {
          color: theme.palette.primary.main,
        },
        boxShadow: theme.shadows[16],
      },
    },
    rowNoPadding: {
      padding: 0,
    },
    rowBodySelected: {},
    cell: {
      boxSizing: "content-box",
      flex: 1,
      transition: theme.transitions.create("color", {
        duration: theme.transitions.duration.shorter,
      }),
    },
    cellBody: {
      padding: theme.spacing(1, 0),
    },
    cellHeader: {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    },
    body: {
      margin: 0,
      padding: 0,
    },
  }),
  { name: "OffsettedList" }
);
