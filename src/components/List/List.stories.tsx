import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text, HomeIcon, Box, MenuIcon } from "~/components";
import { List } from ".";

export default {
  component: List.Item,
} as ComponentMeta<typeof List.Item>;

const Template: ComponentStory<typeof List.Item> = (args) => (
  <List>
    <List.Item {...args} paddingX={4} paddingY={4} gap={5} borderRadius={3}>
      <HomeIcon size="large" />
      <Text>List component</Text>
    </List.Item>
  </List>
);

export const Item = Template.bind({});
Item.args = {};

export const ItemDisabled = Template.bind({});
ItemDisabled.args = {
  disabled: true,
};

export const ListGroup = () => (
  <List>
    <List.ItemGroup>
      <List.ItemGroup.Trigger
        paddingX={4}
        paddingY={4}
        borderRadius={3}
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap={5}>
          <MenuIcon size="large" />
          <Text>Trigger</Text>
        </Box>
      </List.ItemGroup.Trigger>
      <List.ItemGroup.Content>
        <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
          <HomeIcon size="large" />
          <Text>Content</Text>
        </List.Item>
      </List.ItemGroup.Content>
    </List.ItemGroup>
  </List>
);

export const ListDivider = () => (
  <List>
    <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
      <HomeIcon />
      <Text>Item 1</Text>
    </List.Item>
    <List.Divider paddingX={4} paddingY={4} />
    <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
      <HomeIcon />
      <Text>Item 2</Text>
    </List.Item>
    <List.Divider paddingX={4} paddingY={4}>
      <Text variant="caption" size="medium">
        List heading
      </Text>
    </List.Divider>
    <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
      <HomeIcon />
      <Text>Item 3</Text>
    </List.Item>
  </List>
);
