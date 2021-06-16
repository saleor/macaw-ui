import { Meta, Story } from "@storybook/react";
import React from "react";

import placeholder from "../assets/placeholder_64x64.png";
import { UserChip, UserChipProps } from "./UserChip";
import { UserChipMenuItem } from "./UserChipMenuItem";

const props: UserChipProps = {
  avatar: null,
  initials: "LI",
  name: "Lorem Ipsum",
};

const Options: React.FC = () => (
  <>
    {["First Option", "Second Option"].map((option) => (
      <UserChipMenuItem key={option}>{option}</UserChipMenuItem>
    ))}
  </>
);

export const Default: Story = () => (
  <UserChip {...props}>
    <Options />
  </UserChip>
);
export const WithSubtext: Story = () => (
  <UserChip {...props} subtext="Lorem ipsum dolor sit amet">
    <Options />
  </UserChip>
);
export const WithAvatar: Story = () => (
  <UserChip {...props} avatar={placeholder}>
    <Options />
  </UserChip>
);

export default {
  title: "User Chip",
} as Meta;
