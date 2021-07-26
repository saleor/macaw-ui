import { Meta, Story } from "@storybook/react";
import React from "react";

import { Filter } from "./Filter";
import { FilterBar } from "./FilterBar";
import { FilterType } from "./types";

const labels = {
  addButton: "Add Filter",
  header: "Filters",
  where: "Where",
  and: "and",
};

export const Default: Story = () => (
  <FilterBar labels={labels}>
    <Filter
      name="category"
      label="Category"
      type={FilterType.Text}
      labels={labels}
    />
    <Filter
      name="availability"
      label="Availability"
      type={FilterType.Choice}
      choices={[
        { label: "Available", value: "yes" },
        { label: "Not Available", value: "no" },
      ]}
      labels={labels}
    />
    <Filter name="name" label="Name" type={FilterType.Text} labels={labels} />
  </FilterBar>
);

export default {
  title: "Filter",
} as Meta;
