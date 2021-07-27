import TextField from "@material-ui/core/TextField";
import React from "react";

import { useFilters } from "../context";
import useStyles from "../styles";
import { FilterData } from "../types";

export interface FilterContentProps {
  filter: FilterData;
}

export const TextFilterField: React.FC<FilterContentProps> = ({ filter }) => {
  const classes = useStyles();
  const { onChange } = useFilters();

  const { name } = filter;

  const handleChange = (event: React.ChangeEvent<any>) =>
    onChange(name, event.target.value);

  return (
    <TextField
      {...filter.options.InputProps}
      className={classes.filterValue}
      InputProps={{
        ...filter.options.InputProps?.InputProps,
        classes: {
          input: classes.filterInputInner,
        },
      }}
      onChange={handleChange}
      value={filter.value}
    />
  );
};
TextFilterField.displayName = "TextFilterField";
