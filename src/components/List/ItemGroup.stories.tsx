import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "../Box";
import { Text } from "../Text";
import { ChervonDownIcon, HomeIcon } from "../Icons";
import { List } from ".";

export default {
  component: List.ItemGroup,
} as ComponentMeta<typeof List.ItemGroup>;

const Template: ComponentStory<typeof List.ItemGroup> = (args) => (
  <List>
    <List.ItemGroup
      defaultExpanded
      trigger={
        <>
          <HomeIcon size="large" />
          <Text>Trigger collapse</Text>
        </>
      }
    >
      <List.Item>
        <HomeIcon size="large" />
        <Text>List component</Text>
      </List.Item>
    </List.ItemGroup>

    <List.ItemGroup
      trigger={
        <>
          <HomeIcon size="large" />
          <Text>Trigger collapse</Text>
        </>
      }
    >
      <List.Item>
        <HomeIcon size="large" />
        <Text>List component</Text>
      </List.Item>
    </List.ItemGroup>
  </List>
);

export const Default = Template.bind({});
Default.args = {
  defaultExpanded: true,
};
