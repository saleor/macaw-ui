import { Meta, Story } from "@storybook/react";
import { debounce } from "lodash";
import React from "react";

import { Filter } from "./Filter";
import { FilterBar } from "./FilterBar";
import { FilterType } from "./types";

const labels = {
  addButton: "Add Filter",
  header: "Filters",
  where: "Where",
  and: "and",
  is: "is",
  range: "between",
};

export const Default: Story = () => (
  <FilterBar labels={labels} onChange={debounce((fd) => console.log(fd), 1000)}>
    <Filter
      name="category"
      label="Category"
      type={FilterType.Text}
      InputProps={{
        placeholder: "Search by name",
      }}
    />
    <Filter
      name="availability"
      label="Availability"
      type={FilterType.Choice}
      choices={[
        { label: "Available", value: "yes" },
        { label: "Not Available", value: "no" },
      ]}
    />
    <Filter name="name" label="Name" type={FilterType.Text} />
    <Filter
      name="status"
      label="Status"
      type={FilterType.Choice}
      default="scheduled"
      choices={[
        { label: "Published", value: "published" },
        { label: "Scheduled for publishing", value: "scheduled" },
        { label: "Not Published", value: "unpublished" },
      ]}
      multiple
    />
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
  </FilterBar>
);

export default {
  title: "Filter",
} as Meta;
