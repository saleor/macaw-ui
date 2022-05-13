import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Indicator } from "./Indicator";

export default {
  title: "Indicator / Regular",
  component: Indicator,
} as ComponentMeta<typeof Indicator>;

const Template: ComponentStory<typeof Indicator> = (args) => {
  console.log(args);
  return <Indicator {...args} />;
};

export const Warning = Template.bind({});
Warning.args = {
  icon: "warning",
};
export const WarningSmall = Template.bind({});
WarningSmall.args = {
  icon: "warning",
  size: "small",
};

export const Error = Template.bind({});
Error.args = {
  icon: "error",
};
export const ErrorSmall = Template.bind({});
ErrorSmall.args = {
  icon: "error",
  size: "small",
};

export const Fail = Template.bind({});
Fail.args = {
  icon: "fail",
};

export const Success = Template.bind({});
Success.args = {
  icon: "success",
};
export const SuccessSmall = Template.bind({});
SuccessSmall.args = {
  icon: "success",
  size: "small",
};
