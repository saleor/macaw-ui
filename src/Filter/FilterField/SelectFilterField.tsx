import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import React from "react";

import { useFilters } from "../context";
import useStyles from "../styles";
import { EventTarget, FilterData } from "../types";

export interface FilterContentProps {
  filter: FilterData;
}

export const SelectFilterField: React.FC<FilterContentProps> = ({ filter }) => {
  const classes = useStyles();
  const { onChange } = useFilters();

  const { name, options } = filter;
  const { choices } = options;

  const handleChoiceChange = (event: React.ChangeEvent<EventTarget>) =>
    onChange(name, event.target.value as string);

  return (
    <Select
      className={classes.filterValue}
      classes={{
        selectMenu: classes.filterInputInner,
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
