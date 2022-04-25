import { MenuItem } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Decorator, GuideDecorator } from "../utils/Decorator";
import { useMockAutocomplete } from "../utils/useMockAutocomplete";
import { Autocomplete } from "./Autocomplete";
import { choices } from "./fixtures";

export const Default: Story = () => {
  const { results, search } = useMockAutocomplete(choices);

  return (
    <Autocomplete
      choices={results}
      fullWidth
      label="Employee of the month"
      onInputChange={search}
    >
      {({ highlightedIndex, getItemProps }) =>
        results.map((choice, choiceIndex) => (
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

export const Loading: Story = () => (
  <Autocomplete fullWidth choices={[]} label="Employee of the month" loading>
    {() => null}
  </Autocomplete>
);

export default {
  decorators: [Decorator, GuideDecorator],
  title: "Autocomplete / Single choice",
} as Meta;
