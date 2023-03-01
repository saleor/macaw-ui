import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Expression } from "./Expression";
import { Box } from "../Box";

export default {
  component: Expression,
} as ComponentMeta<typeof Expression>;

/*

   <Expression>
      <Expression.OperandDropdown>
        <Expression.OperandTrigger>
          selected option
        </Expression.OperandItem>
        <Expression.OperandItem>
          operand 1
        </Expression.OperandItem>
        <Expression.OperandItem>
          operand 1
        </Expression.OperantItem>
      </Expression.OperandDropdown>
      <Expression.Condition>
      </Expression.Condition>
      <Expression.OperandDropdown>
        <Expression.OperandTrigger>
          selected option
        </Expression.OperandItem>
        <Expression.OperandItem>
          operand 1
        </Expression.OperandItem>
        <Expression.OperandItem>
          operand 1
        </Expression.OperantItem>
      </Expression.OperandDropdown>
    </Expression>


*/

export const Default: ComponentStory<typeof Expression> = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box paddingY={9}>
      <Expression>
        <Expression.OperandDropdown triggerText="Product type">
          <Expression.OperandItem>type 1</Expression.OperandItem>
          <Expression.OperandItem>type 2</Expression.OperandItem>
          <Expression.OperandItem>type 3</Expression.OperandItem>
        </Expression.OperandDropdown>
        <Expression.Condition />
        <Expression.OperandDropdown triggerText="T-shirt">
          <Expression.OperandItem>Shirt</Expression.OperandItem>
          <Expression.OperandItem>Shoes</Expression.OperandItem>
          <Expression.OperandItem>Pants</Expression.OperandItem>
        </Expression.OperandDropdown>
      </Expression>
    </Box>
    <Box paddingY={9}>
      <Expression>
        <Expression.OperandDropdown triggerText="Product type">
          <Expression.OperandItem>type 1</Expression.OperandItem>
          <Expression.OperandItem>type 2</Expression.OperandItem>
          <Expression.OperandItem>type 3</Expression.OperandItem>
        </Expression.OperandDropdown>
        <Expression.Condition />
        <Expression.OperandAutocomplete>
          <Expression.AutocompleteItem>item 1</Expression.AutocompleteItem>
          <Expression.AutocompleteItem>item 2</Expression.AutocompleteItem>
          <Expression.AutocompleteItem>item 3</Expression.AutocompleteItem>
        </Expression.OperandAutocomplete>
      </Expression>
    </Box>
    {/* <Box paddingY={9}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandText />
      </Expression>
    </Box>
    <Box paddingY={9}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandNumber />
      </Expression>
    </Box>
    <Box paddingY={9}>
      <Expression>
        <Expression.OperandDropdown />
        <Expression.Condition />
        <Expression.OperandRange />
      </Expression>
    </Box> */}
  </Box>
);
