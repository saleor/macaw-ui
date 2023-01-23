import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "./Text";

export default {
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Lorem ipsum dolor sit amet</Text>
);

export const Default = Template.bind({});
Default.args = {
  color: "textNeutralDefault",
  size: "medium",
  variant: "body1",
  fontWeight: "regular",
  as: "span",
};
