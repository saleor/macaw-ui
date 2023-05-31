import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Select } from ".";

const options = [
  { value: "color-black", label: "Black" },
  { value: "color-red", label: "Red" },
  { value: "color-green", label: "Green" },
  { value: "color-blue", label: "Blue" },
  { value: "color-orange", label: "Orange" },
  { value: "color-purple", label: "Purple" },
];

const meta: Meta<typeof Select> = {
  title: "Components / Select",
  tags: ["autodocs"],
  component: Select,
  args: {
    options,
    label: "Pick a color",
    size: "large",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectTemplate: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(options[0].value);

    return (
      <Select
        {...args}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const Default: Story = {
  ...SelectTemplate,
  parameters: {
    docs: {
      source: {
        code: `
const [value, setValue] = useState("color-black");

<Select
  label="Label"
  size="large"
  value={value}
  onChange={(e) => setValue(value)}
  options={[{ value: "color-black", label: "Black" }]}
/>;
        `,
      },
    },
  },
};

export const Error: Story = {
  ...SelectTemplate,
  args: {
    error: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const [value, setValue] = useState("color-black");

<Select
  label="Label"
  size="large"
  value={value}
  onChange={(e) => setValue(value)}
  options={[{ value: "color-black", label: "Black" }]}
  error
/>;
        `,
      },
    },
  },
};

export const Disabled: Story = {
  ...SelectTemplate,
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const [value, setValue] = useState("color-black");

<Select
  label="Label"
  size="large"
  value={value}
  onChange={(e) => setValue(value)}
  options={[{ value: "color-black", label: "Black" }]}
  disabled
/>;
        `,
      },
    },
  },
};

export const WithHelperText: Story = {
  ...SelectTemplate,
  args: {
    helperText: "Helper text",
  },
  parameters: {
    docs: {
      source: {
        code: `
const [value, setValue] = useState("color-black");

<Select
  label="Label"
  size="large"
  value={value}
  onChange={(e) => setValue(value)}
  options={[{ value: "color-black", label: "Black" }]}
  helperText="Helper text"
/>;
        `,
      },
    },
  },
};

export const DynamicOptions = () => {
  const [options, setOptions] = useState([
    { value: "color-black", label: "Black" },
    { value: "color-red", label: "Red" },
    { value: "color-green", label: "Green" },
    { value: "color-blue", label: "Blue" },
    { value: "color-orange", label: "Orange" },
    { value: "color-purple", label: "Purple" },
  ]);

  const [value, setValue] = useState(options[0].value);

  return (
    <Select
      value={value}
      onChange={(value) => setValue(value as string)}
      options={options}
      onInfiniteScroll={() => {
        setOptions((prev) => [
          ...prev,
          { value: "color-white", label: "White" },
        ]);
      }}
    />
  );
};
