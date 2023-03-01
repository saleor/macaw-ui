import { ComponentMeta } from "@storybook/react";

import { useEffect, useState } from "react";
import { DecorativeBox } from "~/utils/DecorativeBox";
import { Box } from "../Box";
import { Text } from "../Text";
import { Checkbox, CheckedState } from ".";

export default {
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const options = [
  { name: "Option 1" },
  { name: "Option 2" },
  { name: "Option 3" },
];

export const Default = () => {
  const [topButtonState, setTopButtonState] =
    useState<CheckedState>("indeterminate");

  const [buttonsState, setButtonsState] = useState([false, true, false]);

  const handleChange = (position: number) => {
    const updatedCheckedState = buttonsState.map((item, index) =>
      index === position ? !item : item
    );
    setButtonsState(updatedCheckedState);
  };

  useEffect(() => {
    if (buttonsState.every((e) => e)) {
      setTopButtonState(true);
    } else if (buttonsState.every((e) => !e)) {
      setTopButtonState(false);
    } else {
      setTopButtonState("indeterminate");
    }
  }, [buttonsState]);

  const toggleAll = (buttonsState: Array<boolean>) => {
    if (buttonsState.every((state) => state)) {
      const updatedCheckedState = new Array(buttonsState.length).fill(false);
      setButtonsState(updatedCheckedState);
      setTopButtonState(false);
    } else {
      const updatedCheckedState = new Array(buttonsState.length).fill(true);
      setButtonsState(updatedCheckedState);
      setTopButtonState(true);
    }
  };

  return (
    <Box display="flex" gap={8}>
      <DecorativeBox>
        <Text variant="heading">Bulk checkboxes</Text>
        <Checkbox
          checked={topButtonState}
          onCheckedChange={() => toggleAll(buttonsState)}
        >
          <Text variant="body">List of options</Text>
        </Checkbox>
        <Box display="flex" flexDirection="column" marginLeft={8} gap={2}>
          {options.map((option, index) => (
            <Checkbox
              key={option.name}
              name={option.name}
              value={option.name}
              checked={buttonsState[index]}
              onCheckedChange={() => handleChange(index)}
            >
              <Text variant="body">{option.name}</Text>
            </Checkbox>
          ))}
        </Box>
      </DecorativeBox>
      <DecorativeBox>
        <Text variant="heading">Default checkboxes</Text>
        <Checkbox>
          <Text variant="body">Option 1</Text>
        </Checkbox>
        <Checkbox defaultChecked>
          <Text variant="body">Option 2</Text>
        </Checkbox>
        <Checkbox disabled>
          <Text variant="body" color="textNeutralDisabled">
            Disabled option
          </Text>
        </Checkbox>
        <Checkbox disabled checked={true}>
          <Text variant="body" color="textNeutralDisabled">
            Checked disabled option
          </Text>
        </Checkbox>
      </DecorativeBox>
      <DecorativeBox>
        <Text variant="heading">Error checkboxes</Text>
        <Checkbox error>
          <Text variant="body">Option 1</Text>
        </Checkbox>
        <Checkbox error defaultChecked>
          <Text variant="body">Option 2</Text>
        </Checkbox>
        <Checkbox error disabled>
          <Text variant="body" color="textNeutralDisabled">
            Disabled option
          </Text>
        </Checkbox>
        <Checkbox error disabled checked={true}>
          <Text variant="body" color="textNeutralDisabled">
            Checked disabled option
          </Text>
        </Checkbox>
      </DecorativeBox>
    </Box>
  );
};
