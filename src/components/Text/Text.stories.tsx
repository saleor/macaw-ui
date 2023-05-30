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
    variant: "hero",
    children: "Some text",
  },
};

export const Title: Story = {
  args: {
    ...Hero.args,
    variant: "title",
  },
};

export const Heading: Story = {
  args: {
    ...Hero.args,
    variant: "heading",
  },
};

export const BodyStrong: Story = {
  args: {
    ...Hero.args,
    variant: "bodyStrong",
  },
};

export const BodyEmp: Story = {
  args: {
    ...Hero.args,
    variant: "bodyEmp",
  },
};

export const Body: Story = {
  args: {
    ...Hero.args,
    variant: "body",
  },
};

export const Button: Story = {
  args: {
    ...Hero.args,
    variant: "button",
  },
};

export const Caption: Story = {
  args: {
    ...Hero.args,
    variant: "caption",
  },
};
