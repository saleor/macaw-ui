import React, { useState } from "react";
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
import { ListActionContext, useListAction } from "./context";
import { useStyles } from "./styles";

export const List: React.FC<BaseListProps> = BaseList;
export const ListHeader: React.FC<BaseListHeaderProps> = BaseListHeader;
export const ListFooter: React.FC<BaseListFooterProps> = BaseListFooter;
export const ListBody: React.FC<BaseListBodyProps> = BaseListBody;
export const ListItem: React.FC<Omit<BaseListItemProps, "classes">> = ({
  hover: initialHover = true,
  ...rest
}) => {
  const classes = useStyles();
  const [hover, setHover] = useState(true);
  console.log(hover, initialHover && hover);

  return (
    <ListActionContext.Provider value={setHover}>
      <BaseListItem classes={classes} hover={initialHover && hover} {...rest} />
    </ListActionContext.Provider>
  );
};
export const ListItemCell: React.FC<Omit<BaseListItemCellProps, "classes">> = (
  props
) => {
  const classes = useStyles();

  return <BaseListItemCell classes={classes} {...props} />;
};

export const ListItemCellAction: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const setHover = useListAction();

  return (
    <div
      onMouseEnter={() => setHover(false)}
      onMouseLeave={() => setHover(true)}
      {...props}
    />
  );
};
