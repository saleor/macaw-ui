import { Meta, Story } from "@storybook/react";
import React from "react";

import { SquareButton } from "../SquareButton";
import { Tooltip, TooltipProps } from "./Tooltip";

const props: TooltipProps = {
  title: "Tooltip",
  children: <SquareButton>Hover</SquareButton>,
};

export const Info: Story = () => <Tooltip variant="info" {...props} />;
export const Success: Story = () => <Tooltip variant="success" {...props} />;
export const Error: Story = () => <Tooltip variant="error" {...props} />;
export const Warning: Story = () => <Tooltip variant="warning" {...props} />;

export default {
  title: "Tooltip",
} as Meta;
