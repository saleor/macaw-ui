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
];

const ComboboxExample = ({
  id,
  defaultValue = "",
  size,
  error,
  disabled,
  helperText,
}: {
  id: string;
  defaultValue?: string;
  size: "small" | "medium" | "large";
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
}) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Combobox
      id={id}
      value={value}
      onChange={(item) => {
        setValue(item?.value ?? "");
      }}
      label="Colors"
      size={size}
      error={error}
      disabled={disabled}
      options={options}
      helperText={helperText}
    />
  );
};

export const Default: ComponentStory<typeof Combobox> = () => {
  return (
    <Box display="grid" gap={5} gridTemplateColumns={3}>
      <ComboboxExample id="combobox-1" defaultValue="Gray" size="large" />
      <ComboboxExample id="combobox-2" size="medium" />
      <ComboboxExample id="combobox-3" size="small" />
      <ComboboxExample id="combobox-4" size="large" error />
      <ComboboxExample id="combobox-5" size="large" disabled />
      <ComboboxExample
        id="combobox-6"
        size="large"
        helperText={"Helper text"}
      />
    </Box>
  );
};
