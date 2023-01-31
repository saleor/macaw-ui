import { ComponentMeta } from "@storybook/react";

import { Text, List, MenuIcon, Button } from "~/components";
import { Drawer } from ".";

export default {
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Default = () => (
  <Drawer>
    <Drawer.Trigger>
      <Button variant="tertiary" fixedWidth>
        <MenuIcon />
      </Button>
    </Drawer.Trigger>
    <Drawer.Content paddingLeft={4} paddingRight={4}>
      <List>
        <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
          <Text>Drawer content!</Text>
        </List.Item>
      </List>
    </Drawer.Content>
  </Drawer>
);
