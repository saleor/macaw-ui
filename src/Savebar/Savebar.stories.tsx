import { Meta, Story } from "@storybook/react";
import React from "react";

import { Decorator } from "../utils/Decorator";
import { useSavebar } from "./context";
import { Savebar, SavebarLabels, SavebarProps } from "./Savebar";

const labels: SavebarLabels = {
  confirm: "Confirm",
  error: "Error",
  cancel: "Cancel",
  delete: "Delete",
};

const Wrapper: React.FC = ({ children }) => {
  const { anchor } = useSavebar();

  return <div ref={anchor}>{children}</div>;
};

const props: SavebarProps = {
  labels,
  disabled: false,
  onCancel: () => undefined,
  onSubmit: () => undefined,
  state: "default",
};
export const Default: Story = () => <Savebar {...props} />;
export const WithDelete: Story = () => (
  <Savebar {...props} onDelete={() => undefined} />
);

export default {
  title: "Savebar",
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
    Decorator,
  ],
} as Meta;
