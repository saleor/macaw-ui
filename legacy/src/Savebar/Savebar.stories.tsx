import { Meta, Story } from "@storybook/react";
import React from "react";

import { useActionBar } from "../ActionBar";
import {
  Savebar,
  SavebarLabels,
  SavebarProps,
  SavebarTooltips,
} from "./Savebar";

const Wrapper: React.FC = ({ children }) => {
  const { anchor } = useActionBar();

  return <div ref={anchor}>{children}</div>;
};

const labels: SavebarLabels = {
  confirm: "Confirm",
  error: "Error",
  cancel: "Cancel",
  delete: "Delete",
};
const tooltips: SavebarTooltips = {
  confirm: "Confirm text",
  cancel: "Cancel text",
  delete: "Delete text",
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
export const WithTooltips: Story = () => (
  <div style={{ paddingTop: 50 }}>
    <Savebar {...props} onDelete={() => undefined} tooltips={tooltips} />
  </div>
);

export default {
  title: "Savebar",
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} as Meta;
