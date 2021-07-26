import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import React from "react";

import { useFilters } from "./context";
import { FilterContent } from "./FilterContent";
import useStyles from "./styles";
import { FilterDetailedOptions, FilterLabels, FilterOptions } from "./types";
import * as utils from "./utils";

export interface FilterProps extends FilterOptions, FilterDetailedOptions {
  labels: FilterLabels;
}
export const Filter: React.FC<FilterProps> = ({
  name,
  label,
  labels,
  ...options
}) => {
  const { register, unregister } = useFilters();
  React.useEffect(() => {
    register(name, label, options);

    return () => unregister(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export interface FilterRowProps {
  first: boolean;
  name: string;
  labels: FilterLabels;
}
export const FilterRow: React.FC<FilterRowProps> = ({
  first,
  name,
  labels,
}) => {
  const classes = useStyles();
  const { filters, toggle } = useFilters();

  const filter = filters.find((filter) => filter.name === name);

  if (!filter?.active) {
    return null;
  }

  const availableFilters = utils.getAvailableFilters(filters);
  const options = [filter, ...availableFilters];

  const change = (event: React.ChangeEvent<any>) => {
    toggle(name);
    toggle(event.target.value);
  };

  console.log("row", name, filter);

  return (
    <div className={classes.filter}>
      <Typography className={classes.filterConjunction}>
        {first ? labels.where : labels.and}
      </Typography>
      <Select
        className={classes.filterName}
        classes={{
          selectMenu: classes.filterNameInner,
        }}
        variant="outlined"
        onChange={change}
        value={filter.name}
        MenuProps={{
          PopoverClasses: {
            paper: classes.selectPaper,
          },
        }}
      >
        {options.map((filter) => (
          <MenuItem value={filter.name}>{filter.label}</MenuItem>
        ))}
      </Select>
      <FilterContent filter={filter} />
      <IconButton className={classes.filterDelete} onClick={() => toggle(name)}>
        <Delete />
      </IconButton>
    </div>
  );
};
