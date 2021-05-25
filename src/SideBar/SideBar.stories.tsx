import { storiesOf } from "@storybook/react";
import React from "react";

import { Decorator } from "../utils/Decorator";
import * as fixtures from "./fixtures";
import { SideBar } from "./SideBar";

storiesOf("Components / Side Menu", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <SideBar
      active="menu1"
      menuItems={fixtures.menu}
      onMenuItemClick={() => undefined}
    />
  ));
