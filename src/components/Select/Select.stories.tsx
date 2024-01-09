import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

<<<<<<< HEAD
import { Select } from ".";
<<<<<<< HEAD
<<<<<<< HEAD
||||||| parent of 6f8127c (working version with tanstack)
=======
import { Option } from "../BaseSelect";
>>>>>>> 6f8127c (working version with tanstack)
||||||| parent of d273d8c (working version with tanstack 1)
import { Option } from "../BaseSelect";
=======
||||||| parent of 86cbf68 (push last changes)
import { Select } from ".";
=======
>>>>>>> 86cbf68 (push last changes)
import { Box } from "../Box";
<<<<<<< HEAD
import { GoogleProductCategories } from "./dataset";
>>>>>>> d273d8c (working version with tanstack 1)
||||||| parent of 86cbf68 (push last changes)
import { GoogleProductCategories } from "./dataset";
=======
import { Select } from ".";
>>>>>>> 86cbf68 (push last changes)

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

export const WithEllipsis = () => {
  const values = [
    { value: "color-black", label: "Long black label here" },
    {
      value: "color-red",
      label: "Long red label here",
    },
  ];
  const [value, setValue] = useState("color-black");

  return (
    <Box __width="200px">
      <Select
        options={values}
        value={value}
        size="large"
        label="Label"
        onChange={(value) => setValue(value)}
      />
    </Box>
  );
};

export const Empty = () => {
  return <Select options={options} value="" />;
};
