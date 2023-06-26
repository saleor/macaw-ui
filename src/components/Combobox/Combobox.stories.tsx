/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { debounce } from "lodash";

import { Option } from "..";
import { Combobox, DynamicCombobox } from ".";

const options = [
  { value: "color-black", label: "Black" },
  { value: "color-red", label: "Red" },
  { value: "color-green", label: "Green" },
  { value: "color-blue", label: "Blue" },
  { value: "color-orange", label: "Orange" },
  { value: "color-purple", label: "Purple" },
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
    const [value, setValue] = useState(options[0]);

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
  const [value, setValue] = useState("color-black");
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "color-black", label: "Black" }]}
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
  const [value, setValue] = useState("color-black");
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "color-black", label: "Black" }]}
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
  const [value, setValue] = useState("color-black");
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "color-black", label: "Black" }]}
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
  const [value, setValue] = useState("color-black");
  
  <Combobox
    label="Label"
    size="large"
    value={value}
    onChange={(e) => setValue(value)}
    options={[{ value: "color-black", label: "Black" }]}
    helperText="Helper text"
  />`,
      },
    },
  },
};

export const DynamicData = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState<Option | null>(null);
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
    <DynamicCombobox
      value={value}
      label="Pick star wars character"
      onChange={(value) => setValue(value)}
      options={options}
      loading={loading}
      onInputValueChange={(inputValue) => {
        debouncedSearch(inputValue);
      }}
    />
  );
};
