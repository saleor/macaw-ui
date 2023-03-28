import { ComponentMeta } from "@storybook/react";

import { Toggle } from "./Toggle";
import { DecorativeBox } from "../../../.storybook//DecorativeBox";
import { Box } from "../Box";
import { Text } from "../Text";

export default {
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Default = () => {
  return (
    <Box display="flex" gap={8}>
      <DecorativeBox>
        <Text variant="heading">Default toggles</Text>
        <Toggle>
          <Text variant="body">Option 1</Text>
        </Toggle>
        <Toggle defaultPressed>
          <Text variant="body">Option 2</Text>
        </Toggle>
        <Toggle disabled>
          <Text variant="body" color="textNeutralDisabled">
            Disabled option
          </Text>
        </Toggle>
        <Toggle disabled pressed={true}>
          <Text variant="body" color="textNeutralDisabled">
            Checked disabled option
          </Text>
        </Toggle>
      </DecorativeBox>
    </Box>
  );
};
