import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "../Text";
import { HomeIcon } from "../Icons";
import { List } from ".";

export default {
  component: List.Item,
} as ComponentMeta<typeof List.Item>;

const Template: ComponentStory<typeof List.Item> = (args) => (
  <List>
    <List.Item {...args}>
      <HomeIcon size="large" />
      <Text>List component</Text>
    </List.Item>
  </List>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const MoreItems = () => (
  <List>
    <List.Item>
      <HomeIcon size="large" />
      <Text>Home</Text>
    </List.Item>
    <List.Item>
      <Text>List element</Text>
    </List.Item>
  </List>
);
