import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./index";

const meta: Meta<typeof Text> = {
  title: "Components / Text",
  tags: ["autodocs"],
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Hero: Story = {
  args: {
    size: 11,
    children: "Some text",
  },
};

export const Title: Story = {
  args: {
    ...Hero.args,
    size: 10,
  },
};

export const Heading: Story = {
  args: {
    ...Hero.args,
    size: 9,
  },
};

export const BodyStrong: Story = {
  args: {
    ...Hero.args,
    size: 8,
  },
};

export const BodyEmp: Story = {
  args: {
    ...Hero.args,
    size: 7,
  },
};

export const Body: Story = {
  args: {
    ...Hero.args,
    size: 5,
  },
};

export const Button: Story = {
  args: {
    ...Hero.args,
    size: 4,
  },
};

export const Caption: Story = {
  args: {
    ...Hero.args,
    size: 3,
  },
};
