import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "Components / Input",
  tags: ["autodocs"],
  component: Input,
  args: {
    label: "Label",
    size: "large",
    placeholder: "Input placeholder",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const InputTemplate: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("Input content");

    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...args}
      />
    );
  },
};

export const Default: Story = {
  ...InputTemplate,
};

export const Errored: Story = {
  ...InputTemplate,
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  ...InputTemplate,
  args: {
    disabled: true,
  },
};
