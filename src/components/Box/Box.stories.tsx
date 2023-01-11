import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "./Box";

export default {
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>Box component</Box>
);

export const Default = Template.bind({});
Default.args = {
  padding: 3,
  borderWidth: 1,
  borderStyle: "solid",
};
