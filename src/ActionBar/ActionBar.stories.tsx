import { Meta, Story } from "@storybook/react";
import React from "react";

import { ConfirmButton, ConfirmButtonLabels } from "../ConfirmButton";
import { ActionBar } from "./ActionBar";
import { useActionBar } from "./context";

const Wrapper: React.FC = ({ children }) => {
  const { anchor } = useActionBar();

  return <div ref={anchor}>{children}</div>;
};

const labels: ConfirmButtonLabels = {
  confirm: "Confirm",
  error: "Error",
};

export const WithContent: Story = () => (
  <ActionBar disabled={false} state="default">
    <ConfirmButton labels={labels} transitionState="default" />
  </ActionBar>
);

export default {
  title: "ActionBar",
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} as Meta;
