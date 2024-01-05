import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Select } from ".";
<<<<<<< HEAD
||||||| parent of 6f8127c (working version with tanstack)
=======
import { Option } from "../BaseSelect";
>>>>>>> 6f8127c (working version with tanstack)

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
type Story = StoryObj<typeof Select>;

const SelectTemplate: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(options[0]);

    return (
      <Select {...args} value={value} onChange={(value) => setValue(value)} />
    );
  },
};

export const Default: Story = {
  ...SelectTemplate,
  parameters: {
    docs: {
      source: {
        code: `
const [value, setValue] = useState({ value: "color-black", label: "Black" });

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
const [value, setValue] = useState({ value: "color-black", label: "Black" });

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
const [value, setValue] = useState({ value: "color-black", label: "Black" });

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
const [value, setValue] = useState({ value: "color-black", label: "Black" });

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

export const WithStringValue = () => {
  const [value, setValue] = useState("color-black");

  return (
    <Select
      options={options}
      value={value}
      size="large"
      onChange={(value) => setValue(value)}
    />
  );
};

export const Virtualized = () => {
  const [value, setValue] = useState("");

  const books: Option[] = [];

  for (let index = 1; index <= 1000; index++) {
    books.push({ value: `author-${index}`, label: `Author ${index}` });
  }

  return (
    <Select
      options={books}
      size="large"
      value={value}
      label="Pick author"
      onChange={(value) => setValue(value)}
    />
  );
};
