import { ComponentMeta } from "@storybook/react";

import { Text, Box, MoreOptionsIcon, List } from "~/components";
import { Dropdown } from "./Dropdown";

export default {
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Item = () => (
  <Dropdown>
    <Dropdown.Trigger>
      <Box cursor="pointer">
        <MoreOptionsIcon />
      </Box>
    </Dropdown.Trigger>
    <Dropdown.Portal>
      <Dropdown.Content>
        <List>
          <Dropdown.Item>
            <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
              <Text>Click me!</Text>
            </List.Item>
          </Dropdown.Item>
          <Dropdown.Item>
            <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
              <Text>Click second!</Text>
            </List.Item>
          </Dropdown.Item>
          <Dropdown.Item>
            <List.Item paddingX={4} paddingY={4} gap={5} borderRadius={3}>
              <Text>Click third!</Text>
            </List.Item>
          </Dropdown.Item>
        </List>
      </Dropdown.Content>
    </Dropdown.Portal>
  </Dropdown>
);
