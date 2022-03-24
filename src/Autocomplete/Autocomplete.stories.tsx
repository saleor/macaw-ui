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
      choices={results.slice(0, 10)}
      label="Select employee of the month"
      onInputChange={search}
    >
      {({ highlightedIndex, getItemProps }) =>
        results.slice(0, 10).map((choice, choiceIndex) => (
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

export default {
  decorators: [Decorator, GuideDecorator],
  title: "Autocomplete",
} as Meta;
