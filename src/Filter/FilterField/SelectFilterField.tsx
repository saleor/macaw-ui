import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

import { useFilters } from "../context";
import useStyles from "../styles";
import { FilterData } from "../types";

export interface FilterContentProps {
  filter: FilterData;
}

export const SelectFilterField: React.FC<FilterContentProps> = ({ filter }) => {
  const classes = useStyles();
  const { onChange } = useFilters();

  const { name, options } = filter;
  const { choices } = options;

  const handleChoiceChange = (event: SelectChangeEvent<string | null>) =>
    onChange(name, event.target.value as string);

  return (
    <Select
      className={classes.filterValue}
      classes={{
        select: classes.filterInputInner,
      }}
      variant="outlined"
      onChange={handleChoiceChange}
      value={filter.value}
    >
      {choices!.map((choice) => (
        <MenuItem key={choice.value} value={choice.value}>
          {choice.label}
        </MenuItem>
      ))}
    </Select>
  );
};
SelectFilterField.displayName = "SelectFilterField";
