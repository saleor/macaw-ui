import { Meta, StoryObj } from "@storybook/react";

import { Box } from "../Box";
import { Text } from "../Text";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components / Chip",
  tags: ["autodocs"],
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    size: "large",
  },
  render: (props) => (
    <Box display="grid" gridTemplateColumns={2} gap={5}>
      {/* Neutral */}
      <Chip {...props} color="default1" backgroundColor="default1">
        <Text variant="caption" size="small" color="default1">
          Example
        </Text>
      </Chip>
      {/* Red */}
      <Chip
        {...props}
        color="critical1"
        backgroundColor="critical2"
        borderColor="critical1"
      >
        <Text color="critical1" size="small" variant="caption">
          Example
        </Text>
      </Chip>
      {/* Green */}
      <Chip
        {...props}
        color="success1"
        backgroundColor="success1"
        borderColor="success1"
      >
        <Text color="success1" size="small" variant="caption">
          Example
        </Text>
      </Chip>
      {/* Blue - low contrast */}
      <Chip {...props} backgroundColor="accent1" borderColor="default1">
        <Text color="accent1" size="small" variant="caption">
          Example
        </Text>
      </Chip>
    </Box>
  ),
};
