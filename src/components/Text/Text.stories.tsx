import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./index";

const meta: Meta<typeof Text> = {
  title: "Components / Text",
  tags: ["autodocs"],
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    variant: "hero",
    children: "Some text",
  },
};

export const Title: Story = {
  args: {
    ...Primary.args,
    variant: "title",
  },
};

export const Heading: Story = {
  args: {
    ...Primary.args,
    variant: "heading",
  },
};

export const BodyStrong: Story = {
  args: {
    ...Primary.args,
    variant: "bodyStrong",
  },
};

export const BodyEmp: Story = {
  args: {
    ...Primary.args,
    variant: "bodyEmp",
  },
};

export const Body: Story = {
  args: {
    ...Primary.args,
    variant: "body",
  },
};

export const Button: Story = {
  args: {
    ...Primary.args,
    variant: "button",
  },
};

export const Caption: Story = {
  args: {
    ...Primary.args,
    variant: "caption",
  },
};
