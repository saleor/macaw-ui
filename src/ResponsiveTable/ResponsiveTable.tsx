import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import Table, { TableProps } from "@material-ui/core/Table";
import React from "react";

import useStyles from "./styles";

export interface ResponsiveTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNodeArray;
  flexBreakpoint?: Breakpoint;
  tableProps?: TableProps;
  className?: string;
  key?: string;
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  children,
  className,
  tableProps,
  flexBreakpoint,
  ...props
}) => {
  const classes = useStyles({ flexBreakpoint });

  return (
    <div className={classes.root} {...props}>
      <Table className={className} {...tableProps}>
        {children}
      </Table>
    </div>
  );
};

ResponsiveTable.displayName = "ResponsiveTable";
