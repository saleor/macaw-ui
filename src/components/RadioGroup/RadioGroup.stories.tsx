import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { RadioGroup } from "./index";

const meta: Meta<typeof RadioGroup> = {
  title: "Components / RadioGroup",
  tags: ["autodocs"],
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    value: "default-checked",
    children: [
      // eslint-disable-next-line react/jsx-key
      <RadioGroup.Item value="default-unchecked" id="default-unchecked">
        <Text>Unchecked</Text>
      </RadioGroup.Item>,
      // eslint-disable-next-line react/jsx-key
      <RadioGroup.Item value="default-checked" id="default-checked">
        <Text>Checked</Text>
      </RadioGroup.Item>,
    ],
  },
};

export const Errored: Story = {
  args: {
    value: "default-checked",
    children: [
      // eslint-disable-next-line react/jsx-key
      <RadioGroup.Item value="default-unchecked" id="default-unchecked" error>
        <Text>Unchecked</Text>
      </RadioGroup.Item>,
      // eslint-disable-next-line react/jsx-key
      <RadioGroup.Item value="default-checked" id="default-checked" error>
        <Text>Checked</Text>
      </RadioGroup.Item>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    value: "default-checked",
    children: [
      // eslint-disable-next-line react/jsx-key
      <RadioGroup.Item
        value="default-unchecked"
        id="default-unchecked"
        disabled
      >
        <Text>Unchecked</Text>
      </RadioGroup.Item>,
      // eslint-disable-next-line react/jsx-key
      <RadioGroup.Item value="default-checked" id="default-checked" disabled>
        <Text>Checked</Text>
      </RadioGroup.Item>,
    ],
  },
};
