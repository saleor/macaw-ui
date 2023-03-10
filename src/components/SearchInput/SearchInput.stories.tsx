import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchInput } from "./SearchInput";
import { Box } from "../Box";

export default {
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

export const Default: ComponentStory<typeof SearchInput> = () => (
  <Box display="flex" flexDirection="column">
    <Box paddingY={9} display="flex" gap={9} alignItems="center">
      <SearchInput size="small" placeholder="Search for products" />
    </Box>
  </Box>
);
