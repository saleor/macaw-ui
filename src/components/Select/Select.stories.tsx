import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { debounce } from "lodash";

import { Box, Option } from "..";
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

export const Loading: Story = {
  ...SelectTemplate,
  args: {
    loading: true,
  },
};

export const DynamicOptions = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState<Option | null>({
    value: "Luke Skywalker",
    label: "Luke Skywalker",
  });
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const response = await fetch(`https://swapi.dev/api/people/?page=1`);
    const body = await response.json();
    setLoading(false);
    return body.results.map((result: { name: string }) => ({
      value: result.name,
      label: result.name,
    }));
  }

  const debouncedLoad = useRef(
    debounce(async () => {
      setOptions(await load());
    }, 300)
  ).current;

  return (
    <Box __width={300}>
      <Select
        value={value}
        onChange={(value) => setValue(value)}
        options={options}
        loading={loading}
        onScrollEnd={() => {
          debouncedLoad();
        }}
        onFocus={() => {
          debouncedLoad();
        }}
        onBlur={() => {
          setLoading(false);
        }}
      />
    </Box>
  );
};
