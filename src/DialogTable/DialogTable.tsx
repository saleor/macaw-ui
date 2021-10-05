import Table, { TableProps } from "@material-ui/core/Table";
import React from "react";

import { useStyles } from "./styles";

export interface DialogTableProps extends TableProps {
  innerRef?: React.Ref<HTMLTableElement>;
}

export const DialogTable = React.forwardRef<HTMLDivElement, DialogTableProps>(
  ({ children, innerRef, ...props }, ref) => {
    const classes = useStyles();

    return (
      <div className={classes.wrapper} ref={ref}>
        <Table ref={innerRef} {...props}>
          {children}
        </Table>
      </div>
    );
  }
);
DialogTable.displayName = "DialogTable";
