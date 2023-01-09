import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { IndicatorCircle } from "./IndicatorCircle";

export default {
  title: "Indicator / Circle",
  component: IndicatorCircle,
} as ComponentMeta<typeof IndicatorCircle>;

const Template: ComponentStory<typeof IndicatorCircle> = (args) => (
  <IndicatorCircle {...args} />
);

export const Warning = Template.bind({});
Warning.args = {
  icon: "warning",
};

export const Error = Template.bind({});
Error.args = {
  icon: "error",
};

export const Success = Template.bind({});
Success.args = {
  icon: "success",
};
