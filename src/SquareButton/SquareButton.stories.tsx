import CloseIcon from "@material-ui/icons/Close";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Decorator } from "../utils/Decorator";
import { SquareButton } from "./SquareButton";

export const Default: Story = () => (
  <SquareButton>
    <CloseIcon />
  </SquareButton>
);

export default {
  title: "Square button",
  decorators: [Decorator],
} as Meta;
