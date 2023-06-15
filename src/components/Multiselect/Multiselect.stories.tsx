/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { debounce } from "lodash";

import { ViewTableIcon, Box, Option } from "..";
import { Multiselect } from ".";

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
    const [selectedItems, setSelectedItems] = useState([
      { value: "Black", label: "Black" },
    ]);

    return (
      <Box __width={300}>
        <Multiselect
          {...args}
          value={selectedItems}
          onChange={(values) => setSelectedItems(values)}
          onInputValueChange={undefined}
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

export const Loading: Story = {
  ...MultiselectTemplate,
  args: {
    loading: true,
  },
};

export const DynamicData = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  async function search(criteria: string) {
    setLoading(true);
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${criteria}`
    );
    const body = await response.json();
    setLoading(false);
    return body.results.map((result: { name: string }) => ({
      value: result.name,
      label: result.name,
    }));
  }

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      setOptions(await search(criteria));
    }, 300)
  ).current;

  return (
    <Box __width={300}>
      <Multiselect
        value={value}
        label="Pick a star wars characters"
        onChange={(value) => setValue(value)}
        options={options}
        loading={loading}
        onInputValueChange={(value) => {
          debouncedSearch(value);
        }}
        locale={{
          inputText: "Add character",
        }}
      />
    </Box>
  );
};
