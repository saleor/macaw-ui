import { useRef, useState } from "react";
import { Meta } from "@storybook/react";
import { debounce } from "lodash";

import { DynamicCombobox } from "..";
import { Option } from "../..";

const meta: Meta<typeof DynamicCombobox> = {
  title: "Components / DynamicCombobox",
  tags: ["autodocs"],
  component: DynamicCombobox,
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

export const Default = () => {
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
