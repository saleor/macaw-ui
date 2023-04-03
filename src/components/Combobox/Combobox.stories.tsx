import { ComponentMeta, ComponentStory } from "@storybook/react";

import { useState } from "react";
import { Combobox } from "./Input";
import { Box } from "../Box";

export default {
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

export const Default: ComponentStory<typeof Combobox> = () => {
  const [value, setValue] = useState("");

  const options = [
    "Black",
    "Red",
    "Green",
    "Blue",
    "Orange",
    "Purple",
    "Pink",
    "Orchid",
    "Aqua",
    "Lime",
    "Gray",
    "Brown",
    "Teal",
    "Skyblue",
  ];

  return (
    <Box display="flex" flexDirection="column">
      <Box paddingY={9} display="flex" gap={9} alignItems="center">
        <Combobox
          id="inp11"
          value={value}
          onChange={(changes) => {
            console.log(changes);
            setValue(changes);
          }}
          label="Label"
          size="large"
          options={options}
          // placeholder="Input placeholder"
        />
      </Box>
    </Box>
  );
};
