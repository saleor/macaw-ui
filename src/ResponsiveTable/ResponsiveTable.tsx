import Table from "@material-ui/core/Table";
import React from "react";

import useStyles from "./styles";

interface ResponsiveTableProps {
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
  key?: string;
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = (props) => {
  const { children, className } = props;

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Table className={className}>{children}</Table>
    </div>
  );
};

ResponsiveTable.displayName = "ResponsiveTable";
