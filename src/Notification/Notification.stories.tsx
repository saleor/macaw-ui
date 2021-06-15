import { Meta, Story } from "@storybook/react";
import React from "react";

import { Notification } from "./Notification";
import type { NotificationProps } from "./types";

const props: NotificationProps = {
  title: "Title",
  onClose: () => undefined,
  type: "info",
};

export const Info: Story = () => <Notification {...props} />;
export const Warn: Story = () => <Notification {...props} type="warning" />;
export const Success: Story = () => <Notification {...props} type="success" />;
export const Error: Story = () => <Notification {...props} type="error" />;
export const WithAction: Story = () => (
  <Notification
    {...props}
    action={{
      label: "Action",
      onClick: () => undefined,
    }}
  />
);
export const WithContent: Story = () => (
  <Notification {...props} content="Some notification content" />
);
export const WithActionAndContent: Story = () => (
  <Notification
    {...props}
    content="Some notification content"
    action={{
      label: "Action",
      onClick: () => undefined,
    }}
  />
);

export default {
  title: "Notification",
} as Meta;
