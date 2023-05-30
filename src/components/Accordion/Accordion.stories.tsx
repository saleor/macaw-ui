/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Box, Text } from "../..";

import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Components / Accordion",
  tags: ["autodocs"],
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const args: Story["args"] = {
  defaultValue: "first-item",
  display: "flex",
  gap: 2,
  flexDirection: "column",
  children: [
    <Accordion.Item value="first-item">
      <Accordion.Trigger>
        <Text>Trigger 1</Text>
      </Accordion.Trigger>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>,
    <Accordion.Item value="second-item">
      <Accordion.Trigger>
        <Text>Trigger 2</Text>
      </Accordion.Trigger>
      <Accordion.Content>Content 2</Accordion.Content>
    </Accordion.Item>,
    <Accordion.Item value="third-item">
      <Accordion.Trigger disabled>
        <Text color="textNeutralDisabled">Trigger 3</Text>
      </Accordion.Trigger>
      <Accordion.Content>Content 3</Accordion.Content>
    </Accordion.Item>,
  ],
};

export const Primary: Story = {
  args,
};

export const Controlled: Story = {
  args,
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<undefined | string>(args.defaultValue);

    return (
      <Box>
        <Box display="flex" flexDirection="column" marginBottom={10}>
          <button onClick={() => setValue("first-item")}>Open first</button>
          <button onClick={() => setValue("second-item")}>Open second</button>
          <button onClick={() => setValue("third-item")}>Open third</button>
        </Box>
        <Accordion
          {...args}
          value={value}
          onValueChange={(value) => setValue(value)}
        />
      </Box>
    );
  },
};
