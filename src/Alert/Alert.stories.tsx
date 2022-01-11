import { Link, Typography } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { Alert, AlertProps } from "./Alert";
import { AlertBase } from "./AlertBase";

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
export const Custom: Story = () => (
  <AlertBase {...props} elevation={16} variant="warning">
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
  </AlertBase>
);

export const WithoutTitle: Story = () => (
  <Alert close={false} variant="info">
    <Typography>
      Gift cards will appear after their order is fullfilled.{" "}
      <Link>View Orders with Gift Cards</Link>
    </Typography>
  </Alert>
);

export default {
  title: "Alert",
} as Meta;
