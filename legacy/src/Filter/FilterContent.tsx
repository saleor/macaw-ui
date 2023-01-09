import React from "react";

import { AutocompleteFilterField } from "./FilterField/AutocompleteFilterField";
import { MultipleSelectFilterField } from "./FilterField/MultipleSelectFilterField";
import { MultipleValueAutocompleteFilterField } from "./FilterField/MultipleValueAutocompleteFilterField";
import { RangeFilterField } from "./FilterField/RangeFilterField";
import { SelectFilterField } from "./FilterField/SelectFilterField";
import { TextFilterField } from "./FilterField/TextFilterField";
import { FilterData, FilterLabels, FilterType } from "./types";

export interface FilterContentProps {
  filter: FilterData;
  labels: FilterLabels;
}

export const FilterContent: React.FC<FilterContentProps> = ({
  filter,
  labels,
}) => {
  const { options, range } = filter;
  const { type, multiple } = options;

  if (type === FilterType.Autocomplete) {
    if (multiple) {
      return <MultipleValueAutocompleteFilterField filter={filter} />;
    }
    return <AutocompleteFilterField filter={filter} />;
  } else if (type === FilterType.Choice) {
    if (multiple) {
      return <MultipleSelectFilterField filter={filter} />;
    }

    return <SelectFilterField filter={filter} />;
  } else if (type === FilterType.Range && range) {
    return <RangeFilterField filter={filter} labels={labels} />;
  }

  return <TextFilterField filter={filter} />;
};
FilterContent.displayName = "FilterContent";
