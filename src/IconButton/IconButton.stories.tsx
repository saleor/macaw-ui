import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { DeleteIcon } from "../icons";
import { IconButton } from "./IconButton";

export default {
  name: "Buttons / IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <DeleteIcon />
  </IconButton>
);

export const Regular = Template.bind({});
Regular.args = {
  variant: "primary",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "secondary",
};

export const OutlineError = Template.bind({});
OutlineError.args = {
  variant: "secondary",
  error: true,
};
