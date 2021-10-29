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
  | "rowCheckbox"
  | "rowNoPadding"
  | "rowHover"
  | "rowBodySelected";

export interface BaseListItemProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLLIElement> {
  classes: Record<BaseListItemClassKey, string>;
  hover?: boolean;
  padding?: "checkbox" | "none" | "default";
  selected?: boolean;
}

export const BaseListItem: React.FC<BaseListItemProps> = ({
  classes,
  className,
  children,
  hover = true,
  padding = "normal",
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
          [classes.rowCheckbox]: padding === "checkbox",
          [baseClasses.rowNoPadding]: padding === "none",
          [classes.rowNoPadding]: padding === "none",
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

export type BaseListItemCellClassKey = "cell" | "cellBody" | "cellHeader";

export interface BaseListItemCellProps
  extends React.HTMLAttributes<HTMLDivElement> {
  classes: Record<BaseListItemCellClassKey, string>;
  colSpan?: number;
}
export const BaseListItemCell: React.FC<BaseListItemCellProps> = ({
  classes,
  className,
  children,
  colSpan,
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
      })}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export type BaseListHeaderProps = React.HTMLProps<HTMLHeadingElement>;
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

export type BaseListFooterProps = React.HTMLProps<HTMLHeadingElement>;
export const BaseListFooter: React.FC<BaseListFooterProps> = ({
  children,
  ...props
}) => (
  <ListContext.Provider value="foot">
    <footer {...props}>{children}</footer>
  </ListContext.Provider>
);
