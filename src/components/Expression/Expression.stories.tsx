import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Expression } from "./Expression";
import { Box } from "../Box";

export default {
  component: Expression,
} as ComponentMeta<typeof Expression>;

export const Default: ComponentStory<typeof Expression> = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box paddingY={6}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandDropdown />
      </Expression>
    </Box>
    <Box paddingY={6}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandAutocomplete />
      </Expression>
    </Box>
    <Box paddingY={6}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandText />
      </Expression>
    </Box>
    <Box paddingY={6}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandNumber />
      </Expression>
    </Box>
    <Box paddingY={6}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandRange />
      </Expression>
    </Box>
  </Box>
);
