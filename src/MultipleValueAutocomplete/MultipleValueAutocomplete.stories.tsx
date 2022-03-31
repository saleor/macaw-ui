import { MenuItem } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Decorator, GuideDecorator } from "../utils/Decorator";
import { useMockAutocomplete } from "../utils/useMockAutocomplete";
import { choices } from "./fixtures";
import { MultipleValueAutocomplete } from "./MultipleValueAutocomplete";

export const Default: Story = () => {
  const { results, search } = useMockAutocomplete(choices);

  return (
    <MultipleValueAutocomplete
      choices={results}
      label="Employees of the month"
      onInputChange={search}
      onChange={console.log}
    >
      {({ choices, getItemProps }) =>
        choices.map((choice, choiceIndex) => (
          <MenuItem {...getItemProps({ item: choice, index: choiceIndex })}>
            {choice.label}
          </MenuItem>
        ))
      }
    </MultipleValueAutocomplete>
  );
};

export const WithInitialState: Story = () => {
  const { results, search } = useMockAutocomplete(choices);

  return (
    <MultipleValueAutocomplete
      choices={results}
      label="Employees of the month"
      onInputChange={search}
      initialValue={[results[1], results[4]]}
      onChange={console.log}
    >
      {({ choices, getItemProps }) =>
        choices.map((choice, choiceIndex) => (
          <MenuItem {...getItemProps({ item: choice, index: choiceIndex })}>
            {choice.label}
          </MenuItem>
        ))
      }
    </MultipleValueAutocomplete>
  );
};

export default {
  decorators: [Decorator, GuideDecorator],
  title: "Autocomplete / Multiple choices",
} as Meta;
