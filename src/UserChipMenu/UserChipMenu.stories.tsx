import { Meta, Story } from "@storybook/react";
import React from "react";

import placeholder from "../assets/placeholder_64x64.png";
import { UserChipMenu, UserChipProps } from "./UserChipMenu";
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
  <>
    <UserChipMenu {...props}>
      <Options />
    </UserChipMenu>
    <div style={{ height: 24 }} />
    <UserChipMenu {...props} open>
      <Options />
    </UserChipMenu>
  </>
);
export const WithSubtext: Story = () => (
  <UserChipMenu {...props} subtext="Lorem ipsum dolor sit amet">
    <Options />
  </UserChipMenu>
);
export const WithAvatar: Story = () => (
  <UserChipMenu {...props} avatar={placeholder}>
    <Options />
  </UserChipMenu>
);

export default {
  title: "User Chip",
} as Meta;
