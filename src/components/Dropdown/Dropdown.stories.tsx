import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { MoreOptionsIcon } from "../Icons";
import { Button } from "../Button";
import { List } from "../List";
import { Dropdown } from "./index";

const meta: Meta<typeof Dropdown> = {
  title: "Components / Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Dropdown.Trigger>
        <Button icon={<MoreOptionsIcon />} variant="tertiary" />
      </Dropdown.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Dropdown.Content align="start">
        <Text>Dropdown content</Text>
      </Dropdown.Content>,
    ],
  },
};

const commonProps = {
  paddingX: 5,
  paddingY: 5,
  gap: 6,
  borderRadius: 3,
} as const;

export const DropdownWithList: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Dropdown.Trigger>
        <Button icon={<MoreOptionsIcon />} variant="tertiary" />
      </Dropdown.Trigger>,
      // eslint-disable-next-line react/jsx-key
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
      </Dropdown.Content>,
    ],
  },
};
