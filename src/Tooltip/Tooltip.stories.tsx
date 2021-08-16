import { Meta, Story } from "@storybook/react";
import React from "react";

import { SquareButton } from "../SquareButton";
import { Tooltip, TooltipProps } from "./Tooltip";

const props: TooltipProps = {
  title: "Tooltip",
  children: <></>,
};

export const Info: Story = () => (
  <Tooltip variant="info" {...props}>
    <SquareButton>Hover</SquareButton>
  </Tooltip>
);
export const Success: Story = () => (
  <Tooltip variant="success" {...props}>
    <SquareButton>Hover</SquareButton>
  </Tooltip>
);
export const Error: Story = () => (
  <Tooltip variant="error" {...props}>
    <SquareButton>Hover</SquareButton>
  </Tooltip>
);
export const Warning: Story = () => (
  <Tooltip variant="warning" {...props}>
    <SquareButton>Hover</SquareButton>
  </Tooltip>
);

export default {
  title: "Tooltip",
} as Meta;
