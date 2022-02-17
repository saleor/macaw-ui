import { Meta, Story } from "@storybook/react";
import React from "react";

import { CircleIndicator } from "./CircleIndicator";

export const Info: Story = () => <CircleIndicator color="info" />;
export const Success: Story = () => <CircleIndicator color="success" />;
export const Error: Story = () => <CircleIndicator color="error" />;
export const Warning: Story = () => <CircleIndicator color="warning" />;

export default {
  title: "CircleIndicator",
} as Meta;
