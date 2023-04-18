import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { MenuIcon } from "../Icons";
import { Button } from "../Button";
import { List } from "../List";
import { Drawer } from "./index";

const meta: Meta<typeof Drawer> = {
  title: "Components / Drawer",
  tags: ["autodocs"],
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Drawer.Trigger>
        <Button variant="tertiary" icon={<MenuIcon />} />
      </Drawer.Trigger>,
      // eslint-disable-next-line react/jsx-key
      <Drawer.Content paddingLeft={5} paddingRight={5}>
        <Text>Drawer content!</Text>
      </Drawer.Content>,
    ],
  },
};
