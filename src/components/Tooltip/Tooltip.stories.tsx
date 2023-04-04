import { ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Tooltip } from ".";

export default {
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Default = () => {
  return (
    <Box display="flex" gap={13} alignItems="center" justifyContent="center">
      <Box>
        <Tooltip>
          <Tooltip.Trigger>
            <Button>Left</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">
            Some hidden text
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip>
          <Tooltip.Trigger>
            <Button>Righ</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">
            Some hidden text
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip>
          <Tooltip.Trigger>
            <Button>Top</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="top">
            Some hidden text
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip>
          <Tooltip.Trigger>
            <Button>Bottom</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="bottom">
            Some hidden text
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Box>
    </Box>
  );
};
