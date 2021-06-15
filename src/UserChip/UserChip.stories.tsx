import MenuItem from "@material-ui/core/MenuItem";
import { Meta, Story } from "@storybook/react";
import React from "react";

import placeholder from "../assets/placeholder_64x64.png";
import { UserChip, UserChipProps } from "./UserChip";

const props: UserChipProps = {
  avatar: null,
  initials: "LI",
  name: "Lorem Ipsum",
};

const Options: React.FC = () => (
  <>
    {["First Option", "Second Option"].map((option) => (
      <MenuItem key={option}>{option}</MenuItem>
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
