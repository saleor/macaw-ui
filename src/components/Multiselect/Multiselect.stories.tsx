/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Box } from "../Box";
import { ViewTableIcon } from "../Icons";
import { Multiselect } from "./Multiselect";

const options = [
  { value: "Black", label: "Black" },
  { value: "Red", label: "Red" },
  { value: "Green", label: "Green" },
  { value: "Blue", label: "Blue" },
  { value: "Orange", label: "Orange" },
  { value: "Purple", label: "Purple" },
  { value: "White", label: "White" },
  { value: "Yellow", label: "Yellow" },
  { value: "Pink", label: "Pink" },
  { value: "Brown", label: "Brown" },
];

const meta: Meta<typeof Multiselect> = {
  title: "Components / Multiselect",
  tags: ["autodocs"],
  component: Multiselect,
  args: {
    options,
    label: "Pick colors",
    id: "multiselect",
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
type Story = StoryObj<typeof Multiselect>;

const MultiselectTemplate: Story = {
  render: (args) => {
    const [selectedItems, setSelectedItems] = useState(["Black", "Red"]);
    const [inputValue, setInputValue] = useState("");

    return (
      <Box __width={300}>
        <Multiselect
          {...args}
          value={selectedItems}
          inputValue={inputValue}
          onInputValueChange={(val) => setInputValue(val as string)}
          onChange={(values) => setSelectedItems(values ?? [])}
        />
      </Box>
    );
  },
};

export const Default: Story = {
  ...MultiselectTemplate,
  parameters: {
    docs: {
      source: {
        code: `
const [selectedItems, setSelectedItems] = useState(["color-black"]);

<Multiselect
  label="Label"
  size="large"
  value={selectedItems}
  onChange={(values) => setSelectedItems(values)}
  options={[{ value: "color-black", label: "Black" }]}
/>;
        `,
      },
    },
  },
};

export const Error: Story = {
  ...MultiselectTemplate,
  args: {
    error: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedItems, setSelectedItems] = useState(["color-black"]);

<Multiselect
  label="Label"
  size="large"
  value={selectedItems}
  onChange={(values) => setSelectedItems(values)}
  options={[{ value: "color-black", label: "Black" }]}
  error
/>;
        `,
      },
    },
  },
};

export const Disabled: Story = {
  ...MultiselectTemplate,
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedItems, setSelectedItems] = useState(["color-black"]);

<Multiselect
  label="Label"
  size="large"
  value={selectedItems}
  onChange={(values) => setSelectedItems(values)}
  options={[{ value: "color-black", label: "Black" }]}
  disabled
/>;
        `,
      },
    },
  },
};

export const WithHelperText: Story = {
  ...MultiselectTemplate,
  args: {
    helperText: "Helper text",
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedItems, setSelectedItems] = useState(["color-black"]);

<Multiselect
  label="Label"
  size="large"
  value={selectedItems}
  onChange={(values) => setSelectedItems(values)}
  options={[{ value: "color-black", label: "Black" }]}
  helperText="Helper text"
/>;
        `,
      },
    },
  },
};

export const WithEndAdornment: Story = {
  ...MultiselectTemplate,
  args: {
    renderEndAdornment: (props) => <ViewTableIcon {...props} />,
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selectedItems, setSelectedItems] = useState(["color-black"]);

<Multiselect
  label="Label"
  size="large"
  value={selectedItems}
  onChange={(values) => setSelectedItems(values)}
  options={[{ value: "color-black", label: "Black" }]}
  renderEndAdornment={(props) => <ViewTableIcon {...props} />}
/>;
        `,
      },
    },
  },
};

export const DynamicData = () => {
  const [options, setOptions] = useState([
    { value: "color-black", label: "Black" },
    { value: "color-red", label: "Red" },
    { value: "color-green", label: "Green" },
    { value: "color-blue", label: "Blue" },
    { value: "color-orange", label: "Orange" },
    { value: "color-purple", label: "Purple" },
  ]);

  const [selectedItems, setSelectedItems] = useState([
    "color-black",
    "color-red",
  ]);
  const [inputValue, setInputValue] = useState("");

  return (
    <Box __width={300}>
      <Multiselect
        value={selectedItems}
        onChange={(values) => setSelectedItems(values ?? [])}
        options={options}
        inputValue={inputValue}
        onInputValueChange={(value) => {
          setInputValue(value as string);
          setOptions([...options, { value: "color-gray", label: "gray" }]);
        }}
        onBlur={() => console.log("blur")}
        onFocus={() => console.log("focus")}
      />
    </Box>
  );
};
