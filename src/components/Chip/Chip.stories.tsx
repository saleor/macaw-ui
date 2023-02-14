import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Chip } from "./Chip";
import { Text } from "../Text";
import { Box } from "../Box";

export default {
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Default: ComponentStory<typeof Chip> = () => (
  <Box display="flex" flexDirection="column" alignItems="center" gap={5}>
    <Chip size="large">
      <Text variant="caption" size="small" color="textNeutralPlain">
        Text
      </Text>
    </Chip>
    <Chip size="medium">
      <Text variant="caption" size="small" color="textNeutralPlain">
        Text
      </Text>
    </Chip>
    <Chip size="small">
      <Text variant="caption" size="small" color="textNeutralPlain">
        Text
      </Text>
    </Chip>
  </Box>
);
