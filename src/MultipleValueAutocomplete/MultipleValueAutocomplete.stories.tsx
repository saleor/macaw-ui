import { Divider, MenuItem } from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { Choice, makeStyles } from "..";
import { ChipRemovable } from "../Chip";

import { Decorator, GuideDecorator } from "../utils/Decorator";
import { useMockAutocomplete } from "../utils/useMockAutocomplete";
import { choices } from "./fixtures";
import { MultipleValueAutocomplete } from "./MultipleValueAutocomplete";

export const Default: Story = () => {
  const { results, search } = useMockAutocomplete(choices);

  return (
    <MultipleValueAutocomplete
      fullWidth
      choices={results}
      label="Employees of the month"
      onInputChange={search}
      onChange={console.log}
    >
      {({ choices, getItemProps }) =>
        choices.map((choice, choiceIndex) => (
          <MenuItem {...getItemProps({ item: choice, index: choiceIndex })}>
            {choice.label}
          </MenuItem>
        ))
      }
    </MultipleValueAutocomplete>
  );
};

export const Loading: Story = () => (
  <MultipleValueAutocomplete
    fullWidth
    choices={[]}
    label="Employees of the month"
    loading
  >
    {({ choices, getItemProps }) =>
      choices.map((choice, choiceIndex) => (
        <MenuItem {...getItemProps({ item: choice, index: choiceIndex })}>
          {choice.label}
        </MenuItem>
      ))
    }
  </MultipleValueAutocomplete>
);

export const WithInitialState: Story = () => {
  const { results, search, more } = useMockAutocomplete(choices);

  return (
    <MultipleValueAutocomplete
      fullWidth
      choices={results}
      label="Employees of the month"
      onInputChange={search}
      initialValue={[results[1], results[4]]}
      onScrollToBottom={more}
      onChange={console.log}
    >
      {({ choices, getItemProps }) =>
        choices.map((choice, choiceIndex) => (
          <MenuItem {...getItemProps({ item: choice, index: choiceIndex })}>
            {choice.label}
          </MenuItem>
        ))
      }
    </MultipleValueAutocomplete>
  );
};

const useStyles = makeStyles(() => ({
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const WithSelectAll: Story = () => {
  const classes = useStyles();
  // To better visualize the feature I've limited chocies to 11
  const choicesArray = choices.slice(0, 10);
  const { results, search } = useMockAutocomplete(choicesArray);

  const [selectedEmployees, setSelectedEmployees] = useState({
    employees: [] as string[],
  });

  const handleEmployeeChange = (e: any) => {
    setSelectedEmployees((form) => ({
      ...form,
      employees: e.target.value,
    }));
  };

  const getChoicesFromValue = () => {
    const { employees } = selectedEmployees;
    const choices = choicesArray.filter((choice) =>
      employees.includes(choice.value)
    );
    return choices;
  };

  const isChoiceSelected = (choices: string[], choice: Choice) => {
    return choices.includes(choice.value);
  };

  return (
    <MultipleValueAutocomplete
      fullWidth
      choices={results}
      initialValue={getChoicesFromValue()}
      label="Employees of the month"
      onInputChange={search}
      onChange={handleEmployeeChange}
      name="employees"
      allowSelectAll
      removableChips={({
        selectedItems,
        removeSelectedItem,
        getSelectedItemProps,
        removeAllItems,
      }) =>
        selectedItems.length === choicesArray.length ? (
          <ChipRemovable
            key="selected-item-all"
            onRemove={() => removeAllItems()}
          >
            Everyone
          </ChipRemovable>
        ) : (
          selectedItems.map((item, index) => (
            <ChipRemovable
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem: item, index })}
              onRemove={() => removeSelectedItem(item)}
            >
              {item.label}
            </ChipRemovable>
          ))
        )
      }
    >
      {({ choices, getItemProps, areAllItemsSelected, selectAllItems }) => (
        <>
          <MenuItem onClick={selectAllItems} className={classes.menuItem}>
            Everyone
            {areAllItemsSelected && <Check />}
          </MenuItem>
          <Divider />
          {choices.map((choice, choiceIndex) => (
            <MenuItem
              {...getItemProps({ item: choice, index: choiceIndex })}
              className={classes.menuItem}
            >
              {choice.label}
              {isChoiceSelected(selectedEmployees.employees, choice) && (
                <Check />
              )}
            </MenuItem>
          ))}
        </>
      )}
    </MultipleValueAutocomplete>
  );
};

export const WithSelectAllAndInitialState: Story = () => {
  const classes = useStyles();
  // To better visualize the feature I've limited chocies to 11
  const choicesArray = choices.slice(0, 10);
  const { results, search } = useMockAutocomplete(choicesArray);

  const [selectedEmployees, setSelectedEmployees] = useState({
    employees: [
      ...choicesArray.slice(0, 2).map(({ value }) => value),
    ] as string[],
  });

  const handleEmployeeChange = (e: any) => {
    setSelectedEmployees((form) => ({
      ...form,
      employees: e.target.value,
    }));
  };

  const isChoiceSelected = (choices: string[], choice: Choice) => {
    return choices.includes(choice.value);
  };

  const mapValuesToChoice = (values: string[]) =>
    choicesArray.filter(({ value }) => values.includes(value));

  return (
    <MultipleValueAutocomplete
      fullWidth
      choices={results}
      initialValue={mapValuesToChoice(selectedEmployees.employees)}
      label="Employees of the month"
      onInputChange={search}
      onChange={handleEmployeeChange}
      name="employees"
      allowSelectAll
      removableChips={({
        selectedItems,
        removeSelectedItem,
        getSelectedItemProps,
        removeAllItems,
      }) =>
        selectedItems.length === choicesArray.length ? (
          <ChipRemovable
            key="selected-item-all"
            onRemove={() => removeAllItems()}
          >
            Everyone
          </ChipRemovable>
        ) : (
          selectedItems.map((item, index) => (
            <ChipRemovable
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem: item, index })}
              onRemove={() => removeSelectedItem(item)}
            >
              {item.label}
            </ChipRemovable>
          ))
        )
      }
    >
      {({ choices, getItemProps, areAllItemsSelected, selectAllItems }) => (
        <>
          <MenuItem onClick={selectAllItems} className={classes.menuItem}>
            Everyone
            {areAllItemsSelected && <Check />}
          </MenuItem>
          <Divider />
          {choices.map((choice, choiceIndex) => (
            <MenuItem
              {...getItemProps({ item: choice, index: choiceIndex })}
              className={classes.menuItem}
            >
              {choice.label}
              {isChoiceSelected(selectedEmployees.employees, choice) && (
                <Check />
              )}
            </MenuItem>
          ))}
        </>
      )}
    </MultipleValueAutocomplete>
  );
};

export default {
  decorators: [Decorator, GuideDecorator],
  title: "Autocomplete / Multiple choices",
} as Meta;
