import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./index";

const meta: Meta<typeof Accordion> = {
  title: "Components / Accordion",
  tags: ["autodocs"],
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    defaultValue: "first-item",
    display: "flex",
    gap: 5,
    flexDirection: "column",
    children: [
      // eslint-disable-next-line react/jsx-key
      <Accordion.Item value="first-item">
        <Accordion.Item.Trigger>Trigger 1</Accordion.Item.Trigger>
        <Accordion.Item.Content>Content 1</Accordion.Item.Content>
      </Accordion.Item>,
      // eslint-disable-next-line react/jsx-key
      <Accordion.Item value="second-item">
        <Accordion.Item.Trigger>Trigger 2</Accordion.Item.Trigger>
        <Accordion.Item.Content>Content 2</Accordion.Item.Content>
      </Accordion.Item>,
    ],
  },
};
