import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";

import { useFilters } from "../context";
import useStyles from "../styles";
import { EventTarget, FilterData, FilterLabels } from "../types";

export interface FilterContentProps {
  filter: FilterData;
  labels: FilterLabels;
}

export const RangeFilterField: React.FC<FilterContentProps> = ({
  filter,
  labels,
}) => {
  const classes = useStyles();
  const { onChange } = useFilters();

  const { name } = filter;

  const handleChange = (event: React.ChangeEvent<EventTarget<string>>) =>
    onChange(name, event.target.value, {
      rangePart: event.target.name as "min" | "max",
    });

  const props: Partial<TextFieldProps> = {
    ...filter.options.InputProps,
    InputProps: {
      classes: {
        input: classes.filterInputInner,
      },
      type: "number",
      ...filter.options.InputProps?.InputProps,
    },
    onChange: handleChange,
  };

  return (
    <div
      className={clsx(classes.filterValue, classes.filterRangeValueContainer)}
    >
      <TextField {...props} name="min" value={filter.values![0]} />
      <Typography className={classes.filterRangeLabel}>{labels.and}</Typography>
      <TextField {...props} name="max" value={filter.values![1]} />
    </div>
  );
};
RangeFilterField.displayName = "RangeFilterField";
