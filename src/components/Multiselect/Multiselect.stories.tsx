import { Meta, StoryObj } from "@storybook/react";

import { Multiselect } from ".";

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
    label: "Pick a color",
    id: "Multiselect",
  },
};

export default meta;
type Story = StoryObj<typeof Multiselect>;

export const Large: Story = {
  args: {
    size: "large",
  },
};
