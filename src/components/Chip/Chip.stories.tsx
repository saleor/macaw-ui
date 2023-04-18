import { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";
import { Text } from "../Text";

const meta: Meta<typeof Chip> = {
  title: "Components / Chip",
  tags: ["autodocs"],
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    size: "large",
    children: (
      <Text variant="caption" size="small" color="textNeutralPlain">
        Example
      </Text>
    ),
  },
};
