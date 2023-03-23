import { ComponentMeta } from "@storybook/react";

import { Text, HomeIcon, Box, MenuIcon } from "~/components";
import { List } from ".";

export default {
  component: List.Item,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof List.Item>;

export const Item = () => (
  <List>
    <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3}>
      <HomeIcon color="iconNeutralSubdued" />
      <Text color={"textNeutralPlain"}>List component</Text>
    </List.Item>
  </List>
);

export const ItemDisabled = () => (
  <List>
    <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3} disabled>
      <HomeIcon color="iconNeutralDisabled" />
      <Text color="textNeutralDisabled">List component</Text>
    </List.Item>
  </List>
);

export const ItemActive = () => (
  <List>
    <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3} active>
      <HomeIcon color="iconNeutralSubdued" />
      <Text>List component</Text>
    </List.Item>
  </List>
);

export const ListGroup = () => (
  <List>
    <List.ItemGroup>
      <List.ItemGroup.Trigger
        paddingX={5}
        paddingY={5}
        borderRadius={3}
        justifyContent="space-between"
        gap={6}
        size="medium"
      >
        <Box display="flex" alignItems="center" gap={6}>
          <MenuIcon color="iconNeutralDefault" />
          <Text>Trigger</Text>
        </Box>
      </List.ItemGroup.Trigger>
      <List.ItemGroup.Content>
        <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3}>
          <HomeIcon color="iconNeutralDefault" />
          <Text>Content</Text>
        </List.Item>
      </List.ItemGroup.Content>
    </List.ItemGroup>
  </List>
);

export const ListDivider = () => (
  <List>
    <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3}>
      <HomeIcon color="iconNeutralDefault" />
      <Text>Item 1</Text>
    </List.Item>
    <List.Divider paddingX={5} paddingY={5} />
    <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3}>
      <HomeIcon color="iconNeutralDefault" />
      <Text>Item 2</Text>
    </List.Item>
    <List.Divider paddingX={5} paddingY={5}>
      <Text variant="caption" size="small" color="textNeutralSubdued">
        List heading
      </Text>
    </List.Divider>
    <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3}>
      <HomeIcon color="iconNeutralDefault" />
      <Text>Item 3</Text>
    </List.Item>
  </List>
);
