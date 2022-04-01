import { Meta, Story } from "@storybook/react";
import { debounce } from "lodash";
import React from "react";

import { useMockAutocomplete } from "../../utils/useMockAutocomplete";
import { Filter } from "../Filter";
import { FilterBar } from "../FilterBar";
import { FilterType } from "../types";
import { labels } from "./labels";

const choices = [
  { label: "Awesome Chair", value: "awesome chair" },
  { label: "Ergonomic Chair", value: "ergonomic chair" },
  { label: "Fantastic Bacon", value: "fantastic bacon" },
  { label: "Fantastic Gloves", value: "fantastic gloves" },
  { label: "Fantastic Hat", value: "fantastic hat" },
  { label: "Fantastic Pants", value: "fantastic pants" },
  { label: "Generic Bacon", value: "generic bacon" },
  { label: "Gorgeous Bacon", value: "gorgeous bacon" },
  { label: "Handcrafted Chair", value: "handcrafted chair" },
  { label: "Handmade Computer", value: "handmade computer" },
  { label: "Handmade Pizza", value: "handmade pizza" },
  { label: "Incredible Shirt", value: "incredible shirt" },
  { label: "Incredible Soap", value: "incredible soap" },
  { label: "Incredible Table", value: "incredible table" },
  { label: "Intelligent Hat", value: "intelligent hat" },
  { label: "Intelligent Mouse", value: "intelligent mouse" },
  { label: "Intelligent Sausages", value: "intelligent sausages" },
  { label: "Licensed Chair", value: "licensed chair" },
  { label: "Practical Hat", value: "practical hat" },
  { label: "Practical Shoes", value: "practical shoes" },
  { label: "Refined Ball", value: "refined ball" },
  { label: "Refined Table", value: "refined table" },
  { label: "Rustic Cheese", value: "rustic cheese" },
  { label: "Rustic Shoes", value: "rustic shoes" },
  { label: "Sleek Car", value: "sleek car" },
  { label: "Small Ball", value: "small ball" },
  { label: "Small Bike", value: "small bike" },
  { label: "Tasty Gloves", value: "tasty gloves" },
  { label: "Tasty Table", value: "tasty table" },
  { label: "Unbranded Gloves", value: "unbranded gloves" },
];

export const Autocomplete: Story = () => {
  const { results, search } = useMockAutocomplete(choices);

  return (
    <FilterBar
      labels={labels}
      onChange={debounce((fd) => console.log(fd), 1000)}
      initial={[
        {
          name: "name",
          value: "Lorem Ipsum",
          values: null,
        },
        {
          name: "product",
          value: choices[0].value,
          values: null,
        },
      ]}
      onClose={() => undefined}
    >
      <Filter name="name" label="Name" type={FilterType.Text} />
      <Filter
        name="price"
        label="Price"
        type={FilterType.Range}
        InputProps={{
          InputProps: {
            endAdornment: "USD",
          },
        }}
      />
      <Filter
        name="product"
        label="Product"
        type={FilterType.Autocomplete}
        choices={results}
        onInputChange={search}
      />
      <Filter
        name="references"
        label="Product references"
        type={FilterType.Autocomplete}
        multiple
        choices={results}
        onInputChange={search}
      />
    </FilterBar>
  );
};

export default {
  title: "Filter / Interactive",
} as Meta;
