import { storiesOf } from "@storybook/react";
import React from "react";

import CardDecorator from "../../.storybook/CardDecorator";
import { IMenu } from "../utils/menu";
import AutocompleteSelectMenu, {
  AutocompleteSelectMenuProps
} from "./AutocompleteSelectMenu";

const menu: IMenu = [
  {
    children: [],
    data: null,
    label: "Item 1",
    value: "item1"
  },
  {
    children: [
      {
        children: [],
        data: null,
        label: "Item 1.1",
        value: "item1.1"
      },
      {
        children: [],
        data: null,
        label: "Item 1.2",
        value: "item1.2"
      }
    ],
    data: null,
    label: "Menu 1"
  },
  {
    children: [],
    data: null,
    label: "Item 3",
    value: "item3"
  },
  {
    children: [],
    data: null,
    label: "Item 4",
    value: "item4"
  },
  {
    children: [
      {
        children: [],
        data: null,
        label: "Item 5.1",
        value: "item5.1"
      },
      {
        children: [],
        data: null,
        label: "Item 5.2",
        value: "item5.2"
      }
    ],
    data: null,
    label: "Menu 5"
  }
];

const props: AutocompleteSelectMenuProps = {
  backLabel: "back",
  disabled: false,
  displayLabel: menu[1].children[1].label.toString(),
  error: false,
  helperText: undefined,
  label: "Autocomplete Menu",
  loading: false,
  name: "menu",
  noResultsLabel: "no results",
  onChange: () => undefined,
  options: menu,
  placeholder: "Start typing to search ..."
};

storiesOf("Autocomplete Menu", module)
  .addDecorator(storyFn => CardDecorator(storyFn))
  .add("default", () => <AutocompleteSelectMenu {...props} />)
  .add("loading", () => <AutocompleteSelectMenu {...props} loading={true} />)
  .add("error", () => (
    <AutocompleteSelectMenu
      {...props}
      error={true}
      helperText="Generic form error"
    />
  ));
