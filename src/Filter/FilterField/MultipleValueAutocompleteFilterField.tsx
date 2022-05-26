import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

import { SyntheticChangeEvent } from "../../../types/utils";
import { MultipleValueAutocomplete } from "../../MultipleValueAutocomplete";
import { useFilters } from "../context";
import useStyles from "../styles";
import { FilterData } from "../types";

export interface FilterContentProps {
  filter: FilterData;
}

export const MultipleValueAutocompleteFilterField: React.FC<
  FilterContentProps
> = ({ filter }) => {
  const classes = useStyles();
  const { onChange } = useFilters();

  const { name, options } = filter;

  if (options.choices === undefined) {
    throw new Error("FilterType.Autocomplete must be used with choices prop");
  }
  if (options.onInputChange === undefined) {
    throw new Error(
      "FilterType.Autocomplete must be used with onInputChange prop"
    );
  }

  const handleChoiceChange = (event: SyntheticChangeEvent<string[]>) =>
    onChange(name, event.target.value);

  return (
    <MultipleValueAutocomplete
      className={classes.filterValue}
      choices={options.choices!}
      InputProps={{
        classes: {
          root: classes.filterMultipleValueInputInner,
        },
      }}
      onChange={handleChoiceChange}
      onInputChange={options.onInputChange}
      value={filter.values}
    >
      {({ choices: filteredChoices, getItemProps, highlightedIndex }) =>
        filteredChoices.map((choice, choiceIndex) => (
          <MenuItem
            selected={highlightedIndex === choiceIndex}
            {...getItemProps({ item: choice, index: choiceIndex })}
          >
            {choice.label}
          </MenuItem>
        ))
      }
    </MultipleValueAutocomplete>
  );
};
MultipleValueAutocompleteFilterField.displayName =
  "MultipleValueAutocompleteFilterField";
