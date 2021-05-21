import { storiesOf } from "@storybook/react";
import React from "react";

import homeIcon from "../../stories/assets/menu-home-icon.svg";
import * as fixtures from "../SideBar/fixtures";
import { Decorator } from "../utils/Decorator";
import SideBarDrawer from "./SideBarDrawer";

storiesOf("Components / Mobile Side Menu", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <SideBarDrawer
      menuItems={fixtures.menu}
      onMenuItemClick={() => undefined}
      logoSrc={{ light: homeIcon }}
    />
  ));
