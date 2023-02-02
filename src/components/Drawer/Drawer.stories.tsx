import { ComponentMeta } from "@storybook/react";

import { Text, List, MenuIcon, Button } from "~/components";
import { Drawer } from ".";

export default {
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Default = () => (
  <Drawer>
    <Drawer.Trigger>
      <Button variant="tertiary" icon={<MenuIcon />} />
    </Drawer.Trigger>
    <Drawer.Content paddingLeft={5} paddingRight={5}>
      <List>
        <List.Item paddingX={5} paddingY={5} gap={6} borderRadius={3}>
          <Text>Drawer content!</Text>
        </List.Item>
      </List>
    </Drawer.Content>
  </Drawer>
);
