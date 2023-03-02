import { ComponentMeta } from "@storybook/react";

import { Text } from "../Text";
import { RadioGroup } from "./index";

export default {
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Default = () => (
  <RadioGroup defaultValue="label-1">
    <RadioGroup.Item value="label" id="123">
      Label
    </RadioGroup.Item>
    <RadioGroup.Item value="label-1" id="42" disabled>
      <Text color="textNeutralDisabled">Disabled</Text>
    </RadioGroup.Item>
    <RadioGroup.Item value="label-2" id="423" error>
      Error
    </RadioGroup.Item>
  </RadioGroup>
);
