import { Meta, Story } from "@storybook/react";
import React from "react";

import { SquareButton } from "../SquareButton";
import { Tooltip, TooltipProps } from "./Tooltip";

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: undefined,
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

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
    placement: "bottom-start",
  },
} as Meta<TooltipProps>;
