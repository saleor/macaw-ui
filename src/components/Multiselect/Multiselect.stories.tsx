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
    value: [options[0]],
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;
type Story = StoryObj<typeof Multiselect>;

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const LargeError: Story = {
  args: {
    ...Large.args,
    error: true,
  },
};

export const MediumError: Story = {
  args: {
    ...Medium.args,
    error: true,
  },
};

export const SmallError: Story = {
  args: {
    ...Small.args,
    error: true,
  },
};

export const LargeDisabled: Story = {
  args: {
    ...Large.args,
    disabled: true,
  },
};

export const MediumDisabled: Story = {
  args: {
    ...Medium.args,
    disabled: true,
  },
};

export const SmallDisabled: Story = {
  args: {
    ...Small.args,
    disabled: true,
  },
};

export const LargeHelperText: Story = {
  args: {
    ...Large.args,
    helperText: "Helper text",
  },
};

export const MediumHelperText: Story = {
  args: {
    ...Medium.args,
    helperText: "Helper text",
  },
};

export const SmallHelperText: Story = {
  args: {
    ...Small.args,
    helperText: "Helper text",
  },
};

export const LargeEndAdornment: Story = {
  args: {
    ...Large.args,
    endAdornment: (
      <Box
        onClick={(event) => {
          event.preventDefault();
          alert("End adornment clicked");
        }}
        cursor="pointer"
        id="open"
      >
        <ViewTableIcon />
      </Box>
    ),
  },
};

export const Controlled = () => {
  const [selectedItems, setSelectedItems] = useState([options[0]]);

  return (
    <Multiselect
      label="Pick colors"
      size="medium"
      value={selectedItems}
      options={options}
      onChange={(values) => setSelectedItems(values ?? [])}
    />
  );
};
