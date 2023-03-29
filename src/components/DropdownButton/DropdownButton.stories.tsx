import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DropdownButton } from "./DropdownButton";
import { Box } from "../Box";

export default {
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>;

export const Default: ComponentStory<typeof DropdownButton> = () => {
  return (
    <Box>
      <Box display="flex" flexDirection="column">
        <Box paddingY={9} display="flex" gap={9} alignItems="center">
          <DropdownButton variant="contained" size="small">
            Filters
          </DropdownButton>
        </Box>
        <Box paddingY={9} display="flex" gap={9} alignItems="center">
          <DropdownButton variant="contained" size="medium">
            Filters
          </DropdownButton>
        </Box>
        <Box paddingY={9} display="flex" gap={9} alignItems="center">
          <DropdownButton variant="contained" size="large">
            Filters
          </DropdownButton>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box paddingY={9} display="flex" gap={9} alignItems="center">
          <DropdownButton variant="text" size="small">
            Filters
          </DropdownButton>
        </Box>
        <Box paddingY={9} display="flex" gap={9} alignItems="center">
          <DropdownButton variant="text" size="medium">
            Filters
          </DropdownButton>
        </Box>
        <Box paddingY={9} display="flex" gap={9} alignItems="center">
          <DropdownButton variant="text" size="large">
            Filters
          </DropdownButton>
        </Box>
      </Box>
    </Box>
  );
};
