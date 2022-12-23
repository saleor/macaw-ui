import { Meta, Story } from "@storybook/react";
import React from "react";

import * as fixtures from "../Sidebar/fixtures";
import { SidebarDrawer } from "./SidebarDrawer";

export const Default: Story = () => (
  <SidebarDrawer menuItems={fixtures.menu} onMenuItemClick={() => undefined} />
);
export const LogoSrc: Story = () => (
  <SidebarDrawer menuItems={fixtures.menu} onMenuItemClick={() => undefined} 
    logoSrc='https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png'
  />
);

export default {
  title: "Sidebar - mobile",
} as Meta;
