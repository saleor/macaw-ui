import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { DecorativeBox } from "../../../.storybook//DecorativeBox";
import { Box } from "../Box";

import { Text } from "../Text";
import { RadioGroup } from "./index";

export default {
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Default = () => {
  const [selected, setSelected] = useState("default-checked");

  return (
    <Box display="flex" gap={5}>
      <DecorativeBox>
        <Text variant="heading">Default radio buttons</Text>
        <RadioGroup
          value={selected}
          onValueChange={(value) => setSelected(value)}
        >
          <RadioGroup.Item value="default-unchecked" id="default-unchecked">
            <Text>Unchecked</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="default-checked" id="default-checked">
            <Text>Checked</Text>
          </RadioGroup.Item>
        </RadioGroup>
      </DecorativeBox>
      <DecorativeBox>
        <Text variant="heading">Disabled radio buttons</Text>
        <RadioGroup value="disabled-checked">
          <RadioGroup.Item
            value="disabled-unchecked"
            id="disabled-unchecked"
            disabled
          >
            <Text color="textNeutralDisabled">Unchecked</Text>
          </RadioGroup.Item>
          <RadioGroup.Item
            value="disabled-checked"
            id="disabled-checked"
            disabled
          >
            <Text color="textNeutralDisabled">Checked</Text>
          </RadioGroup.Item>
        </RadioGroup>
      </DecorativeBox>
      <DecorativeBox>
        <Text variant="heading">Error radio buttons</Text>
        <RadioGroup value="error-checked">
          <RadioGroup.Item value="error-unchecked" id="error-unchecked" error>
            <Text color="textCriticalDefault">Unchecked</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="error-checked" id="error-checked" error>
            <Text color="textCriticalDefault">Checked</Text>
          </RadioGroup.Item>
        </RadioGroup>
      </DecorativeBox>
    </Box>
  );
};
