import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from ".";

export default {
  component: Avatar.User,
} as ComponentMeta<typeof Avatar.User>;

const UserTemplate: ComponentStory<typeof Avatar.User> = (args) => (
  <Avatar.User {...args} />
);

export const UserWithInitials = UserTemplate.bind({});
UserWithInitials.args = {
  initials: "LI",
  scheme: "decorative1",
  size: "medium",
};

export const UserWithImage = UserTemplate.bind({});
UserWithImage.args = {
  src: "https://source.unsplash.com/random/32x32",
  scheme: "decorative1",
  size: "medium",
};

const StoreTemplate: ComponentStory<typeof Avatar.Store> = (args) => (
  <Avatar.Store {...args} />
);

export const StoreWithInitials = StoreTemplate.bind({});
StoreWithInitials.args = {
  initials: "A",
  scheme: "decorative1",
  size: "medium",
};

export const StoreWithImage = StoreTemplate.bind({});
StoreWithImage.args = {
  src: "https://source.unsplash.com/random/32x32",
  scheme: "decorative1",
  size: "medium",
};
