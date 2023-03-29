import { ComponentMeta } from "@storybook/react";

import { Accordion } from ".";

export default {
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Accordion>;

export const Default = () => (
  <Accordion
    defaultValue="first-item"
    display="flex"
    gap={5}
    flexDirection="column"
  >
    <Accordion.Item value="first-item">
      <Accordion.Item.Trigger>Trigger 1</Accordion.Item.Trigger>
      <Accordion.Item.Content>Content 1</Accordion.Item.Content>
    </Accordion.Item>
    <Accordion.Item value="second-item">
      <Accordion.Item.Trigger>Trigger 2</Accordion.Item.Trigger>
      <Accordion.Item.Content>Content 2</Accordion.Item.Content>
    </Accordion.Item>
  </Accordion>
);
