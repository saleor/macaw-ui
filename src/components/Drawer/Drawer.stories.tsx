import { ComponentMeta } from "@storybook/react";

import { Text, Box, List, MenuIcon } from "~/components";
import { Drawer } from ".";

export default {
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Default = () => (
  <Drawer>
    <Drawer.Trigger>
      <Box
        as="button"
        borderWidth={0}
        backgroundColor="interactiveNeutralHighlightDefault"
        cursor="pointer"
      >
        <MenuIcon />
      </Box>
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
