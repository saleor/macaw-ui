import { Meta, Story } from "@storybook/react";
import React from "react";

import { SquareButton } from "../SquareButton";
import { Tooltip, TooltipProps } from "./Tooltip";

export const Info: Story<TooltipProps> = (args) => (
  <Tooltip variant="info" {...args} />
);
export const Success: Story<TooltipProps> = (args) => (
  <Tooltip variant="success" {...args} />
);
export const Error: Story<TooltipProps> = (args) => (
  <Tooltip variant="error" {...args} />
);
export const Warning: Story<TooltipProps> = (args) => (
  <Tooltip variant="warning" {...args} />
);

export default {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Tooltip",
    open: true,
    children: <SquareButton>Hover</SquareButton>,
  },
} as Meta<TooltipProps>;
