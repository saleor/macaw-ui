import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { IndicatorOutlined } from "./IndicatorOutlined";

export default {
  title: "Indicator / Outlined",
  component: IndicatorOutlined,
} as ComponentMeta<typeof IndicatorOutlined>;

const Template: ComponentStory<typeof IndicatorOutlined> = (args) => (
  <IndicatorOutlined {...args} />
);

export const Warning = Template.bind({});
Warning.args = {
  icon: "warning",
};
export const WarningSmall = Template.bind({});
WarningSmall.args = {
  icon: "warning",
  size: "small",
};
export const WarningText = Template.bind({});
WarningText.args = {
  icon: "warning",
  color: "text",
};
export const WarningSmallText = Template.bind({});
WarningSmallText.args = {
  icon: "warning",
  color: "text",
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
export const ErrorText = Template.bind({});
ErrorText.args = {
  icon: "error",
  color: "text",
};
export const ErrorSmallText = Template.bind({});
ErrorSmallText.args = {
  icon: "error",
  color: "text",
  size: "small",
};

export const Fail = Template.bind({});
Fail.args = {
  icon: "fail",
};
export const FailText = Template.bind({});
FailText.args = {
  icon: "fail",
  color: "text",
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
export const SuccessText = Template.bind({});
SuccessText.args = {
  icon: "success",
  color: "text",
};
export const SuccessSmallText = Template.bind({});
SuccessSmallText.args = {
  icon: "success",
  color: "text",
  size: "small",
};
