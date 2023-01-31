import { ComponentMeta } from "@storybook/react";

import { Text, Button, MoreOptionsIcon, List } from "~/components";
import { Dropdown } from ".";

export default {
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const commonProps = {
  paddingX: 4,
  paddingY: 4,
  gap: 5,
  borderRadius: 3,
} as const;

export const Default = () => (
  <Dropdown>
    <Dropdown.Trigger>
      <Button icon={<MoreOptionsIcon />} variant="tertiary" />
    </Dropdown.Trigger>
    <Dropdown.Content align="start">
      <List
        padding={3}
        borderRadius={3}
        boxShadow="overlay"
        backgroundColor="surfaceNeutralPlain"
      >
        <Dropdown.Item>
          <List.Item {...commonProps}>
            <Text>First item</Text>
          </List.Item>
        </Dropdown.Item>
        <Dropdown.Item>
          <List.Item {...commonProps}>
            <Text>Second item</Text>
          </List.Item>
        </Dropdown.Item>
      </List>
    </Dropdown.Content>
  </Dropdown>
);
