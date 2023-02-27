import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";
import { Box } from "../Box";

export default {
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => (
  <Box display="flex" flexDirection="column">
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <Input id="inp11" value="Input content" label="Label" size="large" />
      <Input id="inp12" value="Input content" label="Label" size="medium" />
      <Input id="inp13" value="Input content" label="Label" size="small" />
    </Box>
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <Input
        id="inp11e"
        value="Input content error"
        label="Label"
        size="large"
        error
      />
      <Input
        id="inp12e"
        value="Input content error"
        label="Label"
        size="medium"
        error
      />
      <Input
        id="inp13e"
        value="Input content error"
        label="Label"
        size="small"
        error
      />
    </Box>
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <Input id="inp21" label="Label" size="large" />
      <Input id="inp22" label="Label" size="medium" />
      <Input id="inp23" label="Label" size="small" />
    </Box>
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <Input id="inp21e" label="Label errored" size="large" error />
      <Input id="inp22e" label="Label errored" size="medium" error />
      <Input id="inp23e" label="Label errored" size="small" error />
    </Box>
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <Input id="inp31" label="Label" disabled size="large" />
      <Input id="inp32" label="Label" disabled size="medium" />
      <Input id="inp33" label="Label" disabled size="small" />
    </Box>
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <Input
        id="inp41"
        value="Input content"
        label="Label"
        size="large"
        disabled
      />
      <Input
        id="inp42"
        value="Input content"
        label="Label"
        size="medium"
        disabled
      />
      <Input
        id="inp43"
        value="Input content"
        label="Label"
        size="small"
        disabled
      />
    </Box>
  </Box>
);
