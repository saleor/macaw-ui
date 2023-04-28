import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Select } from ".";

const options = [
  { value: "color-black", label: "Black" },
  { value: "color-red", label: "Red" },
  { value: "color-green", label: "Green" },
  { value: "color-blue", label: "Blue" },
  { value: "color-orange", label: "Orange" },
  { value: "color-purple", label: "Purple" },
];

const meta: Meta<typeof Select> = {
  title: "Components / Select",
  tags: ["autodocs"],
  component: Select,
  args: {
    options,
    label: "Pick a color",
    id: "select",
    value: "color-black",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

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

export const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      options={options}
      label="Pick a color"
      id="select-2"
      value={value}
      onChange={(selectedItem) => setValue(selectedItem as string)}
    />
  );
};
