import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Combobox } from ".";

const options = [
  { value: "color-black", label: "Black" },
  { value: "color-red", label: "Red" },
  { value: "color-green", label: "Green" },
  { value: "color-blue", label: "Blue" },
  { value: "color-orange", label: "Orange" },
  { value: "color-purple", label: "Purple" },
];

const meta: Meta<typeof Combobox> = {
  title: "Components / Combobox",
  tags: ["autodocs"],
  component: Combobox,
  args: {
    options,
    label: "Pick a color",
    id: "combobox",
    size: "large",
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const ComboboxTemplate: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(options[0].value);

    return (
      <Combobox
        {...args}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const Default: Story = {
  ...ComboboxTemplate,
};

export const Error: Story = {
  ...ComboboxTemplate,
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  ...ComboboxTemplate,
  args: {
    disabled: true,
  },
};

export const WithHelperText: Story = {
  ...ComboboxTemplate,
  args: {
    helperText: "Helper text",
  },
};
