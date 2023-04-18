import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Toggle } from "./index";

const meta: Meta<typeof Toggle> = {
  title: "Components / Toggle",
  tags: ["autodocs"],
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Text variant="body">Option 1</Text>,
    ],
  },
};

export const DefaultPressed: Story = {
  args: {
    defaultPressed: true,
    children: [
      // eslint-disable-next-line react/jsx-key
      <Text variant="body">Option 1</Text>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: [
      // eslint-disable-next-line react/jsx-key
      <Text variant="body">Option 1</Text>,
    ],
  },
};

export const DisabledAndPressed: Story = {
  args: {
    disabled: true,
    pressed: true,
    children: [
      // eslint-disable-next-line react/jsx-key
      <Text variant="body">Option 1</Text>,
    ],
  },
};
