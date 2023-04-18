import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { MoreOptionsIcon } from "../Icons";
import { Button } from "../Button";
import { List } from "../List";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "Components / Input",
  tags: ["autodocs"],
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    value: "Input content",
    label: "Label",
    size: "large",
    placeholder: "Input placeholder",
  },
};

export const Errored: Story = {
  args: {
    ...Primary.args,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};
