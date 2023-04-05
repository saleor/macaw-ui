import { ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";
import { Tooltip } from ".";

export default {
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Default = () => {
  return (
    <Box>
      <Box>
        <Text marginBottom={5} display="block">
          Tooltip with only content
        </Text>
        <Box display="flex" gap={13} marginBottom={10}>
          <Tooltip>
            <Tooltip.Trigger>
              <Button>Left</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="left">
              Tooltip content
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>

          <Tooltip>
            <Tooltip.Trigger>
              <Button>Righ</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="right">
              Tooltip content
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>

          <Tooltip>
            <Tooltip.Trigger>
              <Button>Top</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="top">
              Tooltip content
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>

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

      <Box>
        <Text marginBottom={5} display="block">
          Tooltip with content and heading
        </Text>
        <Box display="flex" gap={13} marginBottom={10}>
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

      <Box>
        <Text marginBottom={5} display="block">
          Tooltip with only heading
        </Text>
        <Box display="flex" gap={13} marginBottom={10}>
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
