import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./index";

const User = Avatar.User;
const Store = Avatar.Store;
Object.assign(User, { displayName: "Avatar.User" });
Object.assign(Store, { displayName: "Avatar.Store" });

const meta: Meta<typeof Avatar> = {
  title: "Components / Avatar",
  tags: ["autodocs"],
  component: User,
};

export default meta;
type Story = StoryObj<typeof User>;

export const Primary: Story = {
  name: "With initials",
  args: {
    initials: "LI",
    scheme: "decorative1",
    size: "medium",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://source.unsplash.com/random/32x32",
    scheme: "decorative1",
    size: "medium",
  },
};

export const AsStoreInitials: Story = {
  args: {
    initials: "LI",
    scheme: "decorative1",
    size: "medium",
  },
  render: (args) => <Store {...args} />,
};

export const AsStoreImage: Story = {
  args: {
    src: "https://source.unsplash.com/random/32x32",
    scheme: "decorative1",
    size: "medium",
  },
  render: (args) => <Store {...args} />,
};
