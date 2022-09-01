import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import clsx from "clsx";
import React from "react";

import { Chip } from "../../Chip";
import { useFilters } from "../context";
import useStyles from "../styles";
import { FilterData } from "../types";

export interface FilterContentProps {
  filter: FilterData;
}

export const MultipleSelectFilterField: React.FC<FilterContentProps> = ({
  filter,
}) => {
  const classes = useStyles();
  const { onChange } = useFilters();
  const [displayValues] = React.useState(
    filter.options.displayValues || filter.options.choices
  );

  const { name, options } = filter;
  const { choices } = options;

  const handleChoiceChange = (event: SelectChangeEvent<string[] | null>) =>
    onChange(name, event.target.value as string);

  return (
    <Select
      className={classes.filterValue}
      classes={{
        nativeInput: classes.filterMultipleValueInputInner,
      }}
      multiple
      variant="outlined"
      onChange={handleChoiceChange}
      value={filter.values}
      renderValue={(values) => {
        const typedValues = values as string[];

        return (
          <div className={classes.filterChipContainer}>
            {typedValues.map((value) => (
              <Chip className={classes.filterChip} key={value}>
                {displayValues?.find((dv) => dv.value === value)?.label ??
                  value}
              </Chip>
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
