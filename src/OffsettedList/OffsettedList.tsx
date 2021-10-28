import React from "react";
import {
  BaseList,
  BaseListBody,
  BaseListBodyProps,
  BaseListFooter,
  BaseListFooterProps,
  BaseListHeader,
  BaseListHeaderProps,
  BaseListItem,
  BaseListItemCell,
  BaseListItemCellProps,
  BaseListItemProps,
  BaseListProps,
} from "../BaseList";
import { useStyles } from "./styles";

export const OffsettedList: React.FC<BaseListProps> = BaseList;
export const OffsettedListHeader: React.FC<BaseListHeaderProps> =
  BaseListHeader;
export const OffsettedListFooter: React.FC<BaseListFooterProps> =
  BaseListFooter;
export const OffsettedListBody: React.FC<BaseListBodyProps> = (props) => {
  const classes = useStyles();

  return <BaseListBody className={classes.body} {...props} />;
};
export const OffsettedListItem: React.FC<Omit<BaseListItemProps, "classes">> = (
  props
) => {
  const classes = useStyles();

  return <BaseListItem classes={classes} {...props} />;
};
export const OffsettedListItemCell: React.FC<
  Omit<BaseListItemCellProps, "classes">
> = (props) => {
  const classes = useStyles();

  return <BaseListItemCell classes={classes} {...props} />;
};
