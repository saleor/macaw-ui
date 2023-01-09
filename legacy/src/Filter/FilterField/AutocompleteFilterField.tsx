import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

import { SyntheticChangeEvent } from "../../../types/utils";
import { Autocomplete } from "../../Autocomplete/Autocomplete";
import { useFilters } from "../context";
import useStyles from "../styles";
import { FilterData } from "../types";

export interface FilterContentProps {
  filter: FilterData;
}

export const AutocompleteFilterField: React.FC<FilterContentProps> = ({
  filter,
}) => {
  const classes = useStyles();
  const { onChange } = useFilters();

  const { name, options } = filter;
  const { choices } = options;

  if (options.choices === undefined) {
    throw new Error("FilterType.Autocomplete must be used with choices prop");
  }
  if (options.onInputChange === undefined) {
    throw new Error(
      "FilterType.Autocomplete must be used with onInputChange prop"
    );
  }

  const handleChoiceChange = (event: SyntheticChangeEvent) =>
    onChange(name, event.target.value);

  return (
    <Autocomplete
      className={classes.filterValue}
      choices={options.choices!}
      InputProps={{
        classes: {
          input: classes.filterInputInner,
        },
      }}
      onChange={handleChoiceChange}
      onInputChange={options.onInputChange}
      value={filter.values}
    >
      {({ getItemProps, highlightedIndex }) =>
        choices!.map((choice, choiceIndex) => (
          <MenuItem
            selected={highlightedIndex === choiceIndex}
            {...getItemProps({ item: choice, index: choiceIndex })}
          >
            {choice.label}
          </MenuItem>
        ))
      }
    </Autocomplete>
  );
};
AutocompleteFilterField.displayName = "AutocompleteFilterField";
