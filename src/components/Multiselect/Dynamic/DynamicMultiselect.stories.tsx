import { Meta } from "@storybook/react";
import { useRef, useState } from "react";
import { debounce } from "lodash";

import { Box, Option } from "../..";
import { DynamicMultiselect } from "..";

const meta: Meta<typeof DynamicMultiselect> = {
  title: "Components / DynamicMultiselect",
  tags: ["autodocs"],
  component: DynamicMultiselect,

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
      <DynamicMultiselect
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
          loadingText: "Loading",
        }}
      />
    </Box>
  );
};
