import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Combobox } from "./Input";
import { Box } from "../Box";

export default {
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

export const Default: ComponentStory<typeof Combobox> = () => (
  <Box display="flex" flexDirection="column">
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <Combobox
        id="inp11"
        value="Input content"
        label="Label"
        size="large"
        placeholder="Input placeholder"
      />
    </Box>
  </Box>
);
