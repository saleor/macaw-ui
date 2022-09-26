import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import placeholder from "../assets/placeholder_64x64.png";
import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: placeholder,
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: "LI",
};
