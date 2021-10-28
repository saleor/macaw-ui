import clsx from "clsx";
import React from "react";
import {
  ListContext,
  ListGridContext,
  useGridStyles,
  useListContext,
} from "./context";
import { ListGridTemplate } from "./styles";

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
  | "rowCheckbox"
  | "rowNoPadding"
  | "rowHover";

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
        {
          [classes.rowBody]: listSection === "body",
          [classes.rowCheckbox]: padding === "checkbox",
          [classes.rowNoPadding]: padding === "none",
          [classes.rowHover]: hover,
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
  const listSection = useListContext();
  const style = colSpan ? { gridColumn: `span ${colSpan}` } : {};

  return (
    <div
      className={clsx(className, classes.cell, {
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

export const BaseListHeader: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...props
}) => (
  <ListContext.Provider value="head">
    <header {...props}>{children}</header>
  </ListContext.Provider>
);

export const BaseListBody: React.FC<React.HTMLProps<HTMLUListElement>> = ({
  children,
  ...props
}) => (
  <ListContext.Provider value="body">
    <ul role="feed" {...props}>
      {children}
    </ul>
  </ListContext.Provider>
);

export const BaseListFooter: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...props
}) => (
  <ListContext.Provider value="foot">
    <footer {...props}>{children}</footer>
  </ListContext.Provider>
);
