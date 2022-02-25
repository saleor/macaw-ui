import clsx from "clsx";
import React from "react";

import {
  ListContext,
  ListGridContext,
  useGridStyles,
  useListContext,
} from "./context";
import { ListGridTemplate, useStyles } from "./styles";

export interface BaseListProps extends React.HTMLAttributes<HTMLElement> {
  gridTemplate: ListGridTemplate;
}
export const BaseList: React.FC<BaseListProps> = ({
  children,
  gridTemplate,
  ...props
}) => (
  <ListGridContext.Provider value={gridTemplate}>
    <section {...props}>{children}</section>
  </ListGridContext.Provider>
);

export type BaseListItemClassKey =
  | "row"
  | "rowBody"
  | "rowHead"
  | "rowFoot"
  | "rowHover"
  | "rowBodySelected";

export interface BaseListItemProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLLIElement> {
  classes: Record<BaseListItemClassKey, string>;
  hover?: boolean;
  selected?: boolean;
}

export const BaseListItem: React.FC<BaseListItemProps> = ({
  classes,
  className,
  children,
  hover = true,
  selected,
  ...props
}) => {
  const baseClasses = useStyles();
  const gridClasses = useGridStyles();
  const listSection = useListContext();

  const Component = listSection === "body" ? "li" : "div";

  return (
    <Component
      className={clsx(
        className,
        "OfsettedTableRow",
        gridClasses.root,
        classes.row,
        baseClasses.row,
        {
          [classes.rowBody]: listSection === "body",
          [classes.rowHead]: listSection === "head",
          [classes.rowFoot]: listSection === "foot",
          [classes.rowHover]: hover,
          [classes.rowBodySelected]: selected,
        }
      )}
      aria-selected={selected}
      {...props}
    >
      {children}
    </Component>
  );
};

export type BaseListItemCellClassKey =
  | "cell"
  | "cellBody"
  | "cellHeader"
  | "cellAction"
  | "cellCheckbox";

export interface BaseListItemCellProps
  extends React.HTMLAttributes<HTMLDivElement> {
  classes: Record<BaseListItemCellClassKey, string>;
  colSpan?: number;
  padding?: "action" | "checkbox" | "none";
}
export const BaseListItemCell: React.FC<BaseListItemCellProps> = ({
  classes,
  className,
  children,
  colSpan,
  padding,
  ...props
}) => {
  const baseClasses = useStyles();
  const listSection = useListContext();
  const style = colSpan ? { gridColumn: `span ${colSpan}` } : {};

  return (
    <div
      className={clsx(className, baseClasses.cell, classes.cell, {
        [classes.cellBody]: listSection === "body",
        [classes.cellHeader]: listSection === "head",
        [classes.cellAction]: padding === "action",
        [classes.cellCheckbox]: padding === "checkbox",
      })}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export type BaseListHeaderProps = React.HTMLProps<HTMLElement>;
export const BaseListHeader: React.FC<BaseListHeaderProps> = ({
  children,
  ...props
}) => (
  <ListContext.Provider value="head">
    <header {...props}>{children}</header>
  </ListContext.Provider>
);

export type BaseListBodyProps = React.HTMLProps<HTMLUListElement>;
export const BaseListBody: React.FC<BaseListBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = useStyles();

  return (
    <ListContext.Provider value="body">
      <ul role="feed" className={clsx(classes.body, className)} {...props}>
        {children}
      </ul>
    </ListContext.Provider>
  );
};

export type BaseListFooterProps = React.HTMLProps<HTMLElement>;
export const BaseListFooter: React.FC<BaseListFooterProps> = ({
  children,
  ...props
}) => (
  <ListContext.Provider value="foot">
    <footer {...props}>{children}</footer>
  </ListContext.Provider>
);
