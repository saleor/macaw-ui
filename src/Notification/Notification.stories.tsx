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

export const WithActionAndLongContent: Story = () => (
  <Notification
    {...props}
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    action={{
      label: "Action",
      onClick: () => undefined,
    }}
  />
);

export const WithApiMessage: Story = () => (
  <Notification
    {...props}
    type="error"
    apiMessage={{
      apiMessageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      hideApiLabel: "Hide log",
      showApiLabel: "See error log",
    }}
    title="Something went wrong"
  />
);

export const WithApiMessageAndAction: Story = () => (
  <Notification
    {...props}
    type="error"
    apiMessage={{
      apiMessageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      hideApiLabel: "Hide log",
      showApiLabel: "See error log",
    }}
    title="Something went wrong"
    action={{
      label: "Action",
      onClick: () => undefined,
    }}
  />
);

export const WithApiMessageAndActionAndContent: Story = () => (
  <Notification
    {...props}
    type="error"
    apiMessage={{
      apiMessageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      hideApiLabel: "Hide log",
      showApiLabel: "See error log",
    }}
    title="Something went wrong"
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
