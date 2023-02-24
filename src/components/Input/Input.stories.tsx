import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";
import { Box } from "../Box";

export default {
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box paddingY={9}>
      <Input id="inp1" value="Input content" label="Label" />
    </Box>
    <Box paddingY={9}>
      <Input id="inp2" label="Label" />
    </Box>
    <Box paddingY={9}>
      <Input label="Label" disabled />
    </Box>
    <Box paddingY={9}>
      <Input id="inp3" value="Input content" label="Label" disabled />
    </Box>
  </Box>
);
