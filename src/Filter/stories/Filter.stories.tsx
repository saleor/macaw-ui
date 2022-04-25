import { Meta, Story } from "@storybook/react";
import { debounce } from "lodash";
import React from "react";

import { Filter } from "../Filter";
import { FilterBar } from "../FilterBar";
import { FilterType } from "../types";
import { labels } from "./labels";

export const Default: Story = () => (
  <FilterBar
    labels={labels}
    onChange={debounce((fd) => console.log(fd), 1000)}
    onClose={() => undefined}
  >
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

const attributeGroup = {
  label: "Attribute",
  name: "attribute",
};
export const WithInitialState: Story = () => (
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
        name: "availability",
        value: "no",
        values: null,
      },
      {
        name: "status",
        values: ["published"],
        value: null,
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
      name="availability"
      label="Availability"
      type={FilterType.Choice}
      choices={[
        { label: "Available", value: "yes" },
        { label: "Not Available", value: "no" },
      ]}
    />
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
      name="color"
      label="Color"
      group={attributeGroup}
      type={FilterType.Choice}
      choices={[
        { label: "Green", value: "green" },
        { label: "Red", value: "red" },
      ]}
    />
    <Filter
      name="size"
      label="Size"
      group={attributeGroup}
      type={FilterType.Choice}
      choices={[
        { label: "XL", value: "xl" },
        { label: "L", value: "l" },
      ]}
    />
  </FilterBar>
);

export default {
  title: "Filter / Dummy",
} as Meta;
