import React from "react";

import useStyles from "./styles";
import { FilterData, FilterType } from "./types";

export interface FilterContentProps {
  filter: FilterData;
}

export const FilterContent: React.FC<FilterContentProps> = ({ filter }) => {
  const classes = useStyles();
  const { name, label, options } = filter;
  const { type, choices } = options;

  if (type === FilterType.Choice) {
    return (
      <>
        {choices!.map((choice) => (
          <div>
            <label htmlFor={name}>{choice.label}</label>
            <input name={name} value={choice.value} type="radio" />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input value={filter.value || ""} name={name} />
    </>
  );
};
FilterContent.displayName = "FilterContent";
