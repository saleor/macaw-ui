import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "Components / Input",
  tags: ["autodocs"],
  component: Input,
  args: {
    value: "Input content",
    label: "Label",
    size: "large",
    placeholder: "Input placeholder",
  },
  argTypes: {
    onChange: { action: "onChange" },
    onBlur: { action: "onBlur" },
    onFocus: { action: "onFocus" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

export const Errored: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
