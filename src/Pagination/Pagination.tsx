import Toolbar from "@material-ui/core/Toolbar";
import React from "react";

import { PaginationActions, PaginationActionsProps } from "./PaginationActions";
import {
  PaginationRowNumberSelect,
  PaginationRowNumberSelectProps,
} from "./PaginationRowNumberSelect";
import useStyles from "./styles";

export interface PaginationProps<ActionProps = {}>
  extends PaginationActionsProps<ActionProps>,
    Omit<
      PaginationRowNumberSelectProps,
      "className" | "choices" | "onChange" | "rowNumber"
    > {
  choices?: number[];
  disabled?: boolean;
  rowNumber?: number;
  onRowNumberUpdate?: (rowNumber: number) => void;
}

export const Pagination = <ActionProps,>({
  choices = [10, 20, 30, 50, 100],
  disabled,
  hasNextPage,
  hasPreviousPage,
  nextIconButtonProps,
  prevIconButtonProps,
  labels,
  rowNumber,
  onNextPage,
  onPreviousPage,
  onRowNumberUpdate,
  ...other
}: PaginationProps<ActionProps>): React.ReactElement => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar} disableGutters {...other}>
      <div className={classes.spacer}>
        {rowNumber && (
          <PaginationRowNumberSelect
            choices={choices}
            disabled={disabled}
            labels={labels}
            rowNumber={rowNumber}
            onChange={onRowNumberUpdate}
          />
        )}
      </div>
      <PaginationActions
        disabled={disabled}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        nextIconButtonProps={nextIconButtonProps}
        prevIconButtonProps={prevIconButtonProps}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      />
    </Toolbar>
  );
};

Pagination.displayName = "Pagination";
