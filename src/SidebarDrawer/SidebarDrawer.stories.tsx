import { Meta, Story } from "@storybook/react";
import React from "react";

import * as fixtures from "../Sidebar/fixtures";
import { SidebarDrawer } from "./SidebarDrawer";

export const Default: Story = () => (
  <SidebarDrawer menuItems={fixtures.menu} onMenuItemClick={() => undefined} />
);

export default {
  title: "Sidebar - mobile",
} as Meta;
