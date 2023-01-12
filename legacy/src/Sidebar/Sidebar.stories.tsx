import { Meta, Story } from "@storybook/react";
import React from "react";

import { SquareButton } from "../SquareButton";
import * as fixtures from "./fixtures";
import { Sidebar, SidebarProps } from "./Sidebar";

const props: SidebarProps = {
  activeId: "menu1",
  menuItems: fixtures.menu,
  onMenuItemClick: () => undefined,
};

export const Default: Story = () => <Sidebar {...props} />;
export const SubmenuSelected: Story = () => (
  <Sidebar {...props} activeId="menu21" />
);
export const WithToolbar: Story = () => (
  <Sidebar {...props} toolbar={<SquareButton>tool</SquareButton>} />
);

export default {
  title: "Sidebar",
} as Meta;
