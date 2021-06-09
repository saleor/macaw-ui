import { Meta, Story } from "@storybook/react";
import React from "react";

import { SquareButton } from "../SquareButton";
import * as fixtures from "./fixtures";
import { Sidebar, SidebarProps } from "./Sidebar";

const props: SidebarProps = {
  active: "menu1",
  menuItems: fixtures.menu,
  onMenuItemClick: () => undefined,
};

export const Default: Story = () => <Sidebar {...props} />;
export const WithToolbar: Story = () => (
  <Sidebar {...props} toolbar={<SquareButton>tool</SquareButton>} />
);

export default {
  title: "Sidebar",
} as Meta;
