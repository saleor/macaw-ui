import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Multiselect } from "./Multiselect";
import { ViewTableIcon } from "../Icons";
import { Box } from "../Box";

const options = [
  { value: "Black", label: "Black" },
  { value: "Red", label: "Red" },
  { value: "Green", label: "Green" },
  { value: "Blue", label: "Blue" },
  { value: "Orange", label: "Orange" },
  { value: "Purple", label: "Purple" },
];

const meta: Meta<typeof Multiselect> = {
  title: "Components / Multiselect",
  tags: ["autodocs"],
  component: Multiselect,
  args: {
    options,
    label: "Pick colors",
    id: "multiselect",
    size: "large",
  },
};

export default meta;
type Story = StoryObj<typeof Multiselect>;

const MultiselectTemplate: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedItems, setSelectedItems] = useState(["Black", "Red"]);

    return (
      <Multiselect
        {...args}
        value={selectedItems}
        onChange={(values) => setSelectedItems(values ?? [])}
      />
    );
  },
};

export const Default: Story = {
  ...MultiselectTemplate,
};

export const Error: Story = {
  ...MultiselectTemplate,
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  ...MultiselectTemplate,
  args: {
    disabled: true,
  },
};

export const WithHelperText: Story = {
  ...MultiselectTemplate,
  args: {
    helperText: "Helper text",
  },
};
