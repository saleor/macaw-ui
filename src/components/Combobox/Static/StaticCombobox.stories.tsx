import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Box } from "~/components/Box";
import { Option } from "~/components/BaseSelect";
import { Combobox } from "..";

const options = [
  { value: "black", label: "Black" },
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
];

const meta: Meta<typeof Combobox> = {
  title: "Components / Combobox",
  tags: ["autodocs"],
  component: Combobox,
  args: {
    options,
    label: "Pick a color",
    id: "combobox",
    size: "large",
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const ComboboxTemplate: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<Option | null>(options[0]);

    return (
      <Combobox {...args} value={value} onChange={(value) => setValue(value)} />
    );
  },
};

export const Default: Story = {
  ...ComboboxTemplate,
  parameters: {
    docs: {
      source: {
        code: `
  const [value, setValue] = useState({ value: "black", label: "Black" });
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "black", label: "Black" }]}
  />`,
      },
    },
  },
};

export const Error: Story = {
  ...ComboboxTemplate,
  args: {
    error: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  const [value, setValue] = useState({ value: "black", label: "Black" });
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "black", label: "Black" }]}
    error
  />`,
      },
    },
  },
};

export const Disabled: Story = {
  ...ComboboxTemplate,
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  const [value, setValue] = useState({ value: "black", label: "Black" });
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "black", label: "Black" }]}
    disabled
  />`,
      },
    },
  },
};

export const WithHelperText: Story = {
  ...ComboboxTemplate,
  args: {
    helperText: "Helper text",
  },
  parameters: {
    docs: {
      source: {
        code: `
  const [value, setValue] = useState({ value: "black", label: "Black" });
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "black", label: "Black" }]}
    helperText="Helper text"
  />`,
      },
    },
  },
};

export const Example = () => {
  const [value, setValue] = useState<string | null>("black");

  return (
    <Combobox
      label="Pick a color"
      size="large"
      value={value}
      onChange={(value) => setValue(value)}
      options={options}
    />
  );
};

export const WithStringValue = () => {
  const [value, setValue] = useState<string | null>("black");

  return (
    <Combobox
      label="Pick a color"
      size="large"
      value={value}
      onChange={(value) => setValue(value)}
      options={options}
    />
  );
};

export const WithAdornment = () => {
  const [value, setValue] = useState<Option | null>(null);

  return (
    <Combobox
      label="Pick a color"
      size="large"
      value={value}
      onChange={(value) => setValue(value)}
      startAdornment={(value) => {
        if (!value) {
          return null;
        }

        return (
          <Box
            width={4}
            height={4}
            marginRight={2}
            __backgroundColor={value.value}
          ></Box>
        );
      }}
      options={options.map((option) => ({
        ...option,
        startAdornment: (
          <Box
            __backgroundColor={option.value}
            marginRight={2}
            width={4}
            height={4}
          ></Box>
        ),
      }))}
    />
  );
};
