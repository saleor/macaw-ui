import { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Components / Skeleton",
  tags: ["autodocs"],
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    height: 11,
  },
};
