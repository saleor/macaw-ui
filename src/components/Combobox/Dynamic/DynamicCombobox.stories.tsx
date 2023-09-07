import { useRef, useState } from "react";
import { Meta } from "@storybook/react";
import { debounce } from "lodash-es";

import { DynamicCombobox } from "..";
import { Box, Option } from "../..";

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
  const [options, setOptions] = useState<Option[]>([]);
  const [value, setValue] = useState<Option | null>(null);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState<string>("");

  async function search(url: string) {
    setLoading(true);
    const response = await fetch(url);
    const body = await response.json();

    setLoading(false);
    return body;
  }

  async function loadMore() {
    if (nextUrl === null) {
      return;
    }

    setLoading(true);
    const res = await search(nextUrl);

    const options = res.results.map((result: { name: string }) => ({
      value: result.name,
      label: result.name,
    }));

    setNextUrl(res.next);
    setOptions((prev) => [...prev, ...options]);

    setLoading(false);
  }

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      const res = await search(
        `https://swapi.dev/api/people/?search=${criteria}`
      );

      setNextUrl(res.next);
      setOptions(
        res.results.map((result: { name: string }) => ({
          value: result.name,
          label: result.name,
        }))
      );
    }, 300)
  ).current;

  return (
    <DynamicCombobox
      value={value}
      label="Pick star wars character"
      onChange={(value) => setValue(value)}
      options={options}
      loading={loading}
      onScrollEnd={() => {
        loadMore();
      }}
      onInputValueChange={(inputValue) => {
        debouncedSearch(inputValue);
      }}
    />
  );
};

export const WithAdorment = () => {
  const [value, setValue] = useState<Option | null>(null);

  return (
    <DynamicCombobox
      value={value}
      label="Pick a color"
      onChange={(value) => setValue(value)}
      options={[
        {
          value: "red",
          label: "Red",
          startAdornment: (
            <Box
              __backgroundColor="red"
              marginRight={2}
              width={4}
              height={4}
            ></Box>
          ),
        },
        {
          value: "blue",
          label: "Blue",
          startAdornment: (
            <Box
              __backgroundColor="blue"
              marginRight={2}
              width={4}
              height={4}
            ></Box>
          ),
        },
        {
          value: "black",
          label: "Black",
          startAdornment: (
            <Box
              __backgroundColor="black"
              marginRight={2}
              width={4}
              height={4}
            ></Box>
          ),
        },
      ]}
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
    />
  );
};

export const Loding = () => {
  const [value, setValue] = useState<Option | null>(null);

  return (
    <DynamicCombobox
      value={value}
      loading={true}
      label="Pick a color"
      onChange={(value) => setValue(value)}
      options={[]}
    />
  );
};
