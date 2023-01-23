import { ComponentMeta } from "@storybook/react";

import { Text, HomeIcon, Box, MenuIcon } from "~/components";
import { List } from ".";

export default {
  component: List.Item,
} as ComponentMeta<typeof List.Item>;

export const Item = () => (
  <List>
    <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
      <HomeIcon color="iconNeutralSubdued" />
      <Text>List component</Text>
    </List.Item>
  </List>
);

export const ItemDisabled = () => (
  <List>
    <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3} disabled>
      <HomeIcon color="iconNeutralDisabled" />
      <Text color="textNeutralDisabled">List component</Text>
    </List.Item>
  </List>
);

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
          <MenuIcon />
          <Text>Trigger</Text>
        </Box>
      </List.ItemGroup.Trigger>
      <List.ItemGroup.Content>
        <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
          <HomeIcon />
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
      <Text variant="caption" size="small" color="textNeutralSubdued">
        List heading
      </Text>
    </List.Divider>
    <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
      <HomeIcon />
      <Text>Item 3</Text>
    </List.Item>
  </List>
);
