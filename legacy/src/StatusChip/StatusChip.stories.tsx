import { Meta, Story } from "@storybook/react";
import React from "react";

import { StatusChip } from "./StatusChip";
import type { StatusChipProps } from "./types";

const props: StatusChipProps = {
  label: "Lorem Ipsum",
  variant: "neutral",
};

export const Info: Story = () => <StatusChip {...props} />;
export const Warn: Story = () => <StatusChip {...props} variant="warning" />;
export const Success: Story = () => <StatusChip {...props} variant="success" />;
export const Error: Story = () => <StatusChip {...props} variant="error" />;
export const Large: Story = () => <StatusChip {...props} size="lg" />;

export default {
  title: "Status Chip",
} as Meta;
