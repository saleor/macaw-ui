import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "./Box";
import { Text } from "../Text";

export default {
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args} __transform="scale(2)">
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

export const Layout = () => (
  <Box
    display="grid"
    alignItems="center"
    gridTemplateColumns={{
      mobile: 1,
      tablet: 3,
    }}
    gap={5}
  >
    <Box
      padding={3}
      backgroundColor="decorativeSurfaceSubdued1"
      __width={100}
      display="flex"
      justifyContent="center"
    >
      <Text color="text1Decorative">1</Text>
    </Box>
    <Box
      padding={3}
      backgroundColor="decorativeSurfaceSubdued1"
      __width={100}
      display="flex"
      justifyContent="center"
    >
      <Text color="text1Decorative">2</Text>
    </Box>
    <Box
      padding={3}
      backgroundColor="decorativeSurfaceSubdued1"
      __width={100}
      display="flex"
      justifyContent="center"
    >
      <Text color="text1Decorative">3</Text>
    </Box>
  </Box>
);
