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
      <Chip {...props}>
        <Text variant="caption" size="small" color="textNeutralPlain">
          Example
        </Text>
      </Chip>
      {/* Red */}
      <Chip
        {...props}
        color="textCriticalDefault"
        backgroundColor="surfaceCriticalDepressed"
        borderColor="neutralHighlight"
      >
        <Text color="textCriticalDefault" size="small" variant="caption">
          Example
        </Text>
      </Chip>
      {/* Green */}
      <Chip
        {...props}
        color="text2Decorative"
        backgroundColor="decorativeSurfaceSubdued2"
        borderColor="neutralHighlight"
      >
        <Text color="text2Decorative" size="small" variant="caption">
          Example
        </Text>
      </Chip>
      {/* Blue */}
      <Chip
        {...props}
        backgroundColor="surfaceBrandSubdued"
        borderColor="neutralHighlight"
      >
        <Text color="textBrandDefault" size="small" variant="caption">
          Example
        </Text>
      </Chip>
    </Box>
  ),
};
