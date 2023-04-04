import { ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Tooltip } from ".";

export default {
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Default = () => {
  return (
    <Box display="grid">
      <Box display="flex" gap={13} alignItems="center" justifyContent="center">
        <Box>
          <Tooltip>
            <Tooltip.Trigger>
              <Button>Left</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">
              Tooltip content
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
              Tooltip content
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
              Tooltip content
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
              Tooltip content
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
        </Box>
      </Box>
      <Box display="flex" gap={13} alignItems="center" justifyContent="center">
        <Box>
          <Tooltip>
            <Tooltip.Trigger>
              <Button>Left</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">
              <Tooltip.ContentHeading>Heading</Tooltip.ContentHeading>
              Tooltip content
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
              <Tooltip.ContentHeading>Heading</Tooltip.ContentHeading>
              Tooltip content
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
              <Tooltip.ContentHeading>Heading</Tooltip.ContentHeading>
              Tooltip content
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
              <Tooltip.ContentHeading>Heading</Tooltip.ContentHeading>
              Tooltip content
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
        </Box>
      </Box>

      <Box display="flex" gap={13} alignItems="center" justifyContent="center">
        <Box>
          <Tooltip>
            <Tooltip.Trigger>
              <Button>Left</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">
              <Tooltip.ContentHeading>
                Nunc augue nunc enim mattis ultricies morbi turpis cras amet.
              </Tooltip.ContentHeading>
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
              <Tooltip.ContentHeading>
                Nunc augue nunc enim mattis ultricies morbi turpis cras amet.
              </Tooltip.ContentHeading>
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
              <Tooltip.ContentHeading>
                Nunc augue nunc enim mattis ultricies morbi turpis cras amet.
              </Tooltip.ContentHeading>
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
              <Tooltip.ContentHeading>
                Nunc augue nunc enim mattis ultricies morbi turpis cras amet.
              </Tooltip.ContentHeading>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
