import { Meta, Story } from "@storybook/react";
import React from "react";

import { Alert, AlertProps } from "./Alert";

const props: AlertProps = {
  close: false,
  title: "Title",
  variant: "info",
};

export const Info: Story = () => <Alert {...props} />;
export const Warn: Story = () => <Alert {...props} variant="warning" />;
export const Success: Story = () => <Alert {...props} variant="success" />;
export const Error: Story = () => <Alert {...props} variant="error" />;
export const WithClose: Story = () => <Alert {...props} close />;
export const WithContent: Story = () => (
  <Alert {...props}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Alert>
);
export const WithContentAndClose: Story = () => (
  <Alert {...props} close>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Alert>
);

export default {
  title: "Alert",
} as Meta;
