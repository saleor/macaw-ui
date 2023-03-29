import { ComponentMeta } from "@storybook/react";

import { Box } from "~/components";
import { Accordion } from ".";

export default {
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Accordion>;

export const Default = () => (
  <Accordion defaultExpanded>
    <Accordion.Trigger>Trigger</Accordion.Trigger>
    <Accordion.Content>
      <Box>Content</Box>
    </Accordion.Content>
  </Accordion>
);
