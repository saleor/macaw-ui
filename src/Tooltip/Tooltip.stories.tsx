import { Meta, Story } from "@storybook/react";
import React from "react";

import { SquareButton } from "../SquareButton";
import { Decorator } from "../utils/Decorator";
import { Tooltip, TooltipProps } from "./Tooltip";

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: undefined,
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  variant: undefined,
  header: "App Permissions",
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
  args: {
    title: "Tooltip",
    open: true,
    children: <SquareButton>Hover</SquareButton>,
    placement: "top-start",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          width: "125vw",
          height: "150vh",
        }}
      >
        <div style={{ paddingTop: "25%" }}>
          <Story />
        </div>
      </div>
    ),
    Decorator,
  ],
} as Meta<TooltipProps>;
