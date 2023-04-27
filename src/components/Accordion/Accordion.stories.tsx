/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../..";

import { Accordion } from ".";

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
      <Accordion.Item value="first-item">
        <Accordion.Trigger>
          <Text>Trigger 1</Text>
        </Accordion.Trigger>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>,
      <Accordion.Item value="second-item">
        <Accordion.Trigger>
          <Text>Trigger 2</Text>
        </Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>,
      <Accordion.Item value="third-item">
        <Accordion.Trigger disabled>
          <Text color="textNeutralDisabled">Trigger 3</Text>
        </Accordion.Trigger>
        <Accordion.Content>Content 3</Accordion.Content>
      </Accordion.Item>,
    ],
  },
};
