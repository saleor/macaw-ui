import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "./Box";
import { Text } from "../Text";

export default {
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <Text>Box component</Text>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  padding: 3,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "neutralDefault",
};
