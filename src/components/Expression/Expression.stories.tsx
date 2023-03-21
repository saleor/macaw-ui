import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState, ChangeEvent } from "react";
import { Expression } from "~/components";
import { Box } from "../Box";

export default {
  component: Expression,
} as ComponentMeta<typeof Expression>;

const SingleDropdownDemo = () => {
  const [value, setValue] = useState("T-shirt");

  const handleClick = (currentValue: string) => () => {
    setValue(currentValue);
  };

  return (
    <Expression>
      <Expression.OperandDropdown triggerText="Product type">
        <Expression.OperantDropdownItem>type 1</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 2</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
      </Expression.OperandDropdown>
      <Expression.Condition currentConditon="is">
        <Expression.ConditionItem>is</Expression.ConditionItem>
        <Expression.ConditionItem>equal to</Expression.ConditionItem>
        <Expression.ConditionItem>is between</Expression.ConditionItem>
      </Expression.Condition>
      <Expression.OperandDropdown triggerText={value}>
        <Expression.OperantDropdownItem onClick={handleClick("T-Shirt")}>
          T-Shirt
        </Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem onClick={handleClick("Shoes")}>
          Shoes
        </Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem onClick={handleClick("Pants")}>
          Pants
        </Expression.OperantDropdownItem>
      </Expression.OperandDropdown>
    </Expression>
  );
};

const AutocompleteDemo = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleKeyDown = () => setOpen(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  const handleClickItem = (itemName: string) => () => {
    setValue((c) =>
      c
        .split(",")
        .slice(0, -1)
        .concat(itemName + ", ")
        .join(", ")
    );
    setOpen(false);
  };

  return (
    <Expression>
      <Expression.OperandDropdown triggerText="Product type">
        <Expression.OperantDropdownItem>type 1</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 2</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
      </Expression.OperandDropdown>
      <Expression.Condition currentConditon="equal to">
        <Expression.ConditionItem>is</Expression.ConditionItem>
        <Expression.ConditionItem>equal to</Expression.ConditionItem>
        <Expression.ConditionItem>is between</Expression.ConditionItem>
      </Expression.Condition>
      <Expression.OperandAutocomplete
        placeholder="Set autocomplete value"
        open={open}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onClickOutside={handleOutsideClick}
      >
        {[...Array(100).keys()].map((k) => (
          <Expression.AutocompleteItem
            key={k}
            onClick={handleClickItem(`item${k}`)}
          >
            item {k}
          </Expression.AutocompleteItem>
        ))}
      </Expression.OperandAutocomplete>
    </Expression>
  );
};

const TextDemo = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Expression>
      <Expression.OperandDropdown triggerText="Product type">
        <Expression.OperantDropdownItem>type 1</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 2</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
      </Expression.OperandDropdown>
      <Expression.Condition currentConditon="is between">
        <Expression.ConditionItem>is</Expression.ConditionItem>
        <Expression.ConditionItem>equal to</Expression.ConditionItem>
        <Expression.ConditionItem>is between</Expression.ConditionItem>
      </Expression.Condition>
      <Expression.OperandText
        onChange={handleChange}
        value={value}
        placeholder="Set value"
      />
    </Expression>
  );
};

const NumberDemo = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Expression>
      <Expression.OperandDropdown triggerText="Product type">
        <Expression.OperantDropdownItem>type 1</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 2</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
      </Expression.OperandDropdown>
      <Expression.Condition currentConditon="is">
        <Expression.ConditionItem>is</Expression.ConditionItem>
        <Expression.ConditionItem>equal to</Expression.ConditionItem>
        <Expression.ConditionItem>is between</Expression.ConditionItem>
      </Expression.Condition>
      <Expression.OperandNumber
        sign="$"
        onChange={handleChange}
        value={value}
        placeholder="Set value"
      />
    </Expression>
  );
};

const RangeDemo = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleChangeFrom = (event: ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value);
  };

  const handleChangeTo = (event: ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  return (
    <Expression>
      <Expression.OperandDropdown triggerText="Product type">
        <Expression.OperantDropdownItem>type 1</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 2</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
      </Expression.OperandDropdown>
      <Expression.Condition currentConditon="is between">
        <Expression.ConditionItem>is</Expression.ConditionItem>
        <Expression.ConditionItem>equal to</Expression.ConditionItem>
        <Expression.ConditionItem>is between</Expression.ConditionItem>
      </Expression.Condition>
      <Expression.OperandRange
        sign="$"
        onFromChange={handleChangeFrom}
        onToChange={handleChangeTo}
        placeholderFrom="From"
        placeholderTo="To"
        from={from}
        to={to}
      />
    </Expression>
  );
};

export const Default: ComponentStory<typeof Expression> = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box paddingY={9}>
      <SingleDropdownDemo />
    </Box>
    <Box paddingY={9}>
      <AutocompleteDemo />
    </Box>
    <Box paddingY={9}>
      <TextDemo />
    </Box>
    <Box paddingY={9}>
      <NumberDemo />
    </Box>
    <Box paddingY={9}>
      <RangeDemo />
    </Box>
  </Box>
);
