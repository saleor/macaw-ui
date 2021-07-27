import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import clsx from "clsx";
import React from "react";

import { useFilters } from "../context";
import useStyles from "../styles";
import { EventTarget, FilterData } from "../types";

export interface FilterContentProps {
  filter: FilterData;
}

export const MultipleSelectFilterField: React.FC<FilterContentProps> = ({
  filter,
}) => {
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
        root: classes.filterInputInner,
      }}
      multiple
      variant="outlined"
      onChange={handleChoiceChange}
      value={filter.values}
      renderValue={(values) => {
        const typedValues = values as string[];

        return (
          <div>
            {typedValues.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </div>
        );
      }}
    >
      {choices!.map((choice) => {
        const active = filter.values!.includes(choice.value);

        return (
          <MenuItem
            key={choice.value}
            className={clsx({
              [classes.filterValueSelected]: active,
            })}
            value={choice.value}
          >
            <Checkbox
              checked={active}
              className={classes.filterValueCheckbox}
            />
            {choice.label}
          </MenuItem>
        );
      })}
    </Select>
  );
};
MultipleSelectFilterField.displayName = "MultipleSelectFilterField";
