import { ComponentMeta } from "@storybook/react";
import { sprinkles } from "~/theme";
import { Button } from "../Button";
import { Text } from "../Text";
import { ConfigurationIcon } from "../Icons";
import { Toggle } from "../Toggle";
import { Box } from "../Box";
import { Popover } from ".";

export default {
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default = () => {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button fixedWidth variant="secondary">
          <ConfigurationIcon />
        </Button>
      </Popover.Trigger>
      <Popover.Content
        className={sprinkles({
          padding: 5,
          backgroundColor: "subdued",
        })}
      >
        <Popover.Arrow />
        <Text size="small" variant="heading">
          Settings
        </Text>
        <Box
          padding={3}
          display="flex"
          flexDirection="column"
          gap={6}
          marginTop={5}
        >
          <Toggle>
            <Text size="small" variant="body">
              Popover content 1
            </Text>
          </Toggle>
          <Toggle>
            <Text size="small" variant="body">
              Popover content 2
            </Text>
          </Toggle>
        </Box>
      </Popover.Content>
    </Popover>
  );
};
