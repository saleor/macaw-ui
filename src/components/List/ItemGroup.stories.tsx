import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "../Text";
import { HomeIcon } from "../Icons";
import { List } from ".";

export default {
  component: List.ItemGroup,
} as ComponentMeta<typeof List.ItemGroup>;

const Template: ComponentStory<typeof List.ItemGroup> = (args) => (
  <List>
    <List.ItemGroup>
      <List.ItemGroup.Trigger gap={5}>
        <HomeIcon size="large" />
        <Text>Trigger collapse</Text>
      </List.ItemGroup.Trigger>
      <List.ItemGroup.Content>
        <List.Item>
          <HomeIcon size="large" />
          <Text>List component</Text>
        </List.Item>
      </List.ItemGroup.Content>
    </List.ItemGroup>
  </List>
);

export const Default = Template.bind({});
Default.args = {
  defaultExpanded: true,
};
