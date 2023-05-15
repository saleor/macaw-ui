// eslint-disable react/jsx-key
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { RadioGroup } from "./index";

const meta: Meta<typeof RadioGroup> = {
  title: "Components / RadioGroup",
  tags: ["autodocs"],
  component: RadioGroup,
  argTypes: {
    size: {
      type: {
        name: "enum",
        value: ["small", "medium", "large"],
      },
    },
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item value="default-unchecked" id="default-unchecked">
        <Text size={args.size}>Unchecked</Text>
      </RadioGroup.Item>
      <RadioGroup.Item value="default-checked" id="default-checked">
        <Text size={args.size}>Checked</Text>
      </RadioGroup.Item>
    </RadioGroup>
  ),
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    label: "Should it be checked?",
    value: "default-checked",
    size: "medium",
  },
};

export const Errored: Story = {
  args: {
    label: "Should it be checked?",
    value: "default-checked",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Should it be checked?",
    value: "default-checked",
    disabled: true,
  },
};
