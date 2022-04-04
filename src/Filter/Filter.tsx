import MenuItem from "@material-ui/core/MenuItem";
import Select, { SelectProps } from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { difference, uniqBy } from "lodash";
import React from "react";

import { IconButton } from "../IconButton";
import { DeleteIcon } from "../icons";
import { useFilters } from "./context";
import { FilterContent } from "./FilterContent";
import useStyles from "./styles";
import {
  EventTarget,
  FilterDetailedOptions,
  FilterLabels,
  FilterOptions,
  FilterType,
} from "./types";
import * as utils from "./utils";

export type FilterProps = FilterOptions & FilterDetailedOptions;
export const Filter: React.FC<FilterProps> = ({
  name: nameProp,
  label,
  ...options
}) => {
  const name = utils.getFilterName(nameProp, options);
  const { filters, register, set, unregister } = useFilters();
  const registered = React.useRef(false);
  const filter = filters.find((fd) => fd.name === name);

  React.useEffect(() => {
    register(name, label, options);
    registered.current = true;

    return () => unregister(name);
  }, []);

  React.useEffect(() => {
    if (
      registered.current &&
      options.choices !== undefined &&
      filter &&
      difference(options.choices, filter!.options.choices!).length
    ) {
      set(name, {
        options: {
          ...options,
          choices: options.choices,
        },
      });
    }
  }, [options.choices]);

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
  const { filters, toggle, toggleRange, swap } = useFilters();

  const filter = filters.find((filter) => filter.name === name);

  if (!filter?.active) {
    return null;
  }

  const availableFilters = utils.getAvailableFilters(filters);
  const options = uniqBy(
    [filter.options.group ?? filter, ...availableFilters],
    "name"
  );
  const groupOptions = [
    filter,
    ...filters.filter(
      (f) =>
        f.name !== filter.name &&
        f.options.group?.name === filter.options.group?.name &&
        !f.active
    ),
  ];

  const change = (event: React.ChangeEvent<EventTarget<unknown>>) => {
    const targetFilterName = event.target.value as string;

    swap(name, targetFilterName);
  };

  const selectProps: SelectProps = {
    classes: {
      selectMenu: classes.filterInputInner,
    },
    variant: "outlined",
  };

  return (
    <div className={classes.filter}>
      <div className={classes.filterOptions}>
        <Typography className={classes.filterConjunction}>
          {first ? labels.where : labels.and}
        </Typography>
        <Select
          {...selectProps}
          className={classes.filterName}
          onChange={change}
          value={filter.options.group?.name ?? filter.name}
        >
          {options.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {!!filter.options.group && (
          <Select
            {...selectProps}
            className={classes.filterName}
            onChange={change}
            value={filter.name}
          >
            {groupOptions.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
        <Select
          {...selectProps}
          disabled={filter.options.type !== FilterType.Range}
          className={classes.filterRange}
          value={filter.range.toString()}
          onChange={() => toggleRange(name)}
        >
          <MenuItem value="false">{labels.is}</MenuItem>
          <MenuItem value="true">{labels.range}</MenuItem>
        </Select>
      </div>
      <FilterContent filter={filter} labels={labels} />
      <div className={classes.filterDeleteContainer}>
        <IconButton
          variant="secondary"
          className={classes.filterDelete}
          onClick={() => toggle(name)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};
