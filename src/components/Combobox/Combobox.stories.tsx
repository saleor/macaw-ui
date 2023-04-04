import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import { Box } from "../Box";
import { Combobox } from ".";

export default {
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

const options = [
  { value: "Black", label: "Black" },
  { value: "Red", label: "Red" },
  { value: "Green", label: "Green" },
  { value: "Blue", label: "Blue" },
  { value: "Orange", label: "Orange" },
  { value: "Purple", label: "Purple" },
  { value: "Pink", label: "Pink" },
  { value: "Orchid", label: "Orchid" },
  { value: "Aqua", label: "Aqua" },
  { value: "Lime", label: "Lime" },
  { value: "Gray", label: "Gray" },
  { value: "Brown", label: "Brown" },
  { value: "Teal", label: "Teal" },
  { value: "Skyblue", label: "Skyblue" },
];

export const Default: ComponentStory<typeof Combobox> = () => {
  const [value, setValue] = useState("");

  return (
    <Box display="flex" flexDirection="column">
      <Box paddingY={9} display="flex" gap={9} alignItems="center">
        <Combobox
          id="inp11"
          value={value}
          onChange={(item) => {
            setValue(item?.value ?? "");
          }}
          label="Label"
          size="large"
          options={options}
        />
      </Box>
    </Box>
  );
};
