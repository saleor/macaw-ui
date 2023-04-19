/* eslint-disable react-hooks/rules-of-hooks */

import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useState } from "react";
import { Expression } from "./index";

const meta: Meta<typeof Expression> = {
  title: "Components / Expression",
  tags: ["autodocs"],
  component: Expression,
};

export default meta;
type Story = StoryObj<typeof Expression>;

export const Primary: Story = {
  args: {
    children: [
      // eslint-disable-next-line react/jsx-key
      <Expression.OperandDropdown triggerText="Product type">
        <Expression.OperantDropdownItem>type 1</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 2</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>type 3</Expression.OperantDropdownItem>
      </Expression.OperandDropdown>,
      // eslint-disable-next-line react/jsx-key
      <Expression.Condition currentConditon="is">
        <Expression.ConditionItem>is</Expression.ConditionItem>
        <Expression.ConditionItem>equal to</Expression.ConditionItem>
        <Expression.ConditionItem>is between</Expression.ConditionItem>
      </Expression.Condition>,
      // eslint-disable-next-line react/jsx-key
      <Expression.OperandDropdown triggerText="Pants">
        <Expression.OperantDropdownItem>T-Shirt</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>Shoes</Expression.OperantDropdownItem>
        <Expression.OperantDropdownItem>Pants</Expression.OperantDropdownItem>
      </Expression.OperandDropdown>,
    ],
  },
};

export const AutocompletionOperand: Story = {
  parameters: {
    docs: {
      source: {
        code: `

const [value, setValue] = useState("");
const [open, setOpen] = useState(false);
      
const handleKeyDown = () => setOpen(true);
      
const handleChange = (event) => {
  setValue(event.target.value);
};
      
const handleOutsideClick = () => {
  setOpen(false);
};

<Expression>
  <Expression.OperandAutocomplete
    placeholder="Set value"
    open={open}
    value={value}
    onKeyDown={handleKeyDown}
    onChange={handleChange}
    onClickOutside={handleOutsideClick}
  >
    <Expression.AutocompleteItem>
      item 1
    </Expression.AutocompleteItem>
    <Expression.AutocompleteItem>
      item 2
    </Expression.AutocompleteItem>
    <Expression.AutocompleteItem>
        item 3
      </Expression.AutocompleteItem>
  </Expression.OperandAutocomplete>
</Expression>
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);

    const handleKeyDown = () => setOpen(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const handleOutsideClick = () => {
      setOpen(false);
    };

    return (
      <Expression>
        <Expression.OperandAutocomplete
          placeholder="Set value"
          open={open}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onClickOutside={handleOutsideClick}
        >
          <Expression.AutocompleteItem>item 1</Expression.AutocompleteItem>
          <Expression.AutocompleteItem>item 2</Expression.AutocompleteItem>
          <Expression.AutocompleteItem>item 3</Expression.AutocompleteItem>
        </Expression.OperandAutocomplete>
      </Expression>
    );
  },
};

export const TextOperand: Story = {
  parameters: {
    docs: {
      source: {
        code: `
const [value, setValue] = useState("");

const handleChange = (event) => {
  setValue(event.target.value);
};
    
return (
  <Expression>
    <Expression.OperandText
      placeholder="Set value"
      value={value}
      onChange={handleChange}
     />
  </Expression>
)
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <Expression>
        <Expression.OperandText
          placeholder="Set value"
          value={value}
          onChange={handleChange}
        />
      </Expression>
    );
  },
};

export const NumberOperand: Story = {
  parameters: {
    docs: {
      source: {
        code: `
const [value, setValue] = useState("");

const handleChange = (event) => {
  setValue(event.target.value);
};
    
return (
  <Expression>
    <Expression.OperandNumber
      value={value}
      onChange={handleChange}
      sign="$"
      placeholder="Set value"
    />
  </Expression>
)
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <Expression>
        <Expression.OperandNumber
          value={value}
          onChange={handleChange}
          sign="$"
          placeholder="Set value"
        />
      </Expression>
    );
  },
};

export const NumberRangeOperand: Story = {
  parameters: {
    docs: {
      source: {
        code: `
const [from, setFrom] = useState("");
const [to, setTo] = useState("");
    
const handleChangeFrom = (event) => {
  setFrom(event.target.value);
};
    
const handleChangeTo = (event) => {
  setTo(event.target.value);
};
    
return (
  <Expression>
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
)
        `,
      },
    },
  },
  render: () => {
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
  },
};
