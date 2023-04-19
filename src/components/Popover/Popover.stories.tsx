import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { ConfigurationIcon } from "../Icons";
import { Button } from "../Button";
import { Popover } from "./index";

const meta: Meta<typeof Popover> = {
  title: "Components / Popover",
  tags: ["autodocs"],
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Popover.Trigger>
        <Button fixedWidth variant="secondary">
          <ConfigurationIcon />
        </Button>
      </Popover.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Popover.Content>
        <Popover.Arrow />
        <Text>Popover content.</Text>
      </Popover.Content>,
    ],
  },
};
