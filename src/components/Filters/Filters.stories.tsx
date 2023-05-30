import { Meta } from "@storybook/react";
import _ from "lodash";
import { useState } from "react";

import { Row, _ExperimentalFilters } from ".";

const meta: Meta<typeof _ExperimentalFilters> = {
  title: "Components / Filters",
  tags: ["autodocs"],
  component: _ExperimentalFilters,
};

export default meta;

const leftOptions = [
  { value: "price", label: "Price" },
  { value: "category", label: "Category" },
  { value: "rating", label: "Rating" },
  { value: "discount", label: "Discount" },
];

const value = [
  "WHERE",
  {
    value: "price",
    condition: {
      options: [
        { value: "input", label: "is" },
        { value: "multiselect", label: "has" },
      ],
      selected: {
        value: "3.13",
        type: "input",
      },
    },
  },
  "AND",
  {
    value: "category",
    condition: {
      options: [{ value: "multiselect", label: "are" }],
      selected: {
        type: "multiselect",
        value: [],
        options: [
          { value: "electronics", label: "Electronics" },
          { value: "clothing", label: "Clothing" },
        ],
      },
    },
  },
  "OR",
  {
    value: "rating",
    condition: {
      options: [{ value: "combobox", label: "is" }],
      selected: {
        type: "combobox",
        value: "",
        options: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ],
      },
    },
  },
  "AND",
  {
    value: "discount",
    condition: {
      options: [{ value: "select", label: "is" }],
      selected: {
        type: "select",
        value: "",
        options: [
          { value: "100%", label: "100%" },
          { value: "50%", label: "50%" },
        ],
      },
    },
  },
];

export const Default = () => {
  const [rows, setRows] = useState<Array<Row | string>>(value);

  return (
    <_ExperimentalFilters
      value={rows}
      leftOptions={leftOptions}
      onChange={(event, context) => {
        if (event?.type === "update.rightOperator") {
          const newState = context.updateRightOperator();
          setRows(newState);
        }

        if (event?.type === "update.condition") {
          const newState = context.updateCondition({
            options: [
              { value: "electronics", label: "Electronics" },
              { value: "clothing", label: "Clothing" },
            ],
          });
          setRows(newState);
        }

        if (event?.type === "update.leftOperator") {
          const newState = context.updateLeftOperator({
            condition: {
              options: [{ value: "input", label: "is" }],
              selected: {
                value: "",
                type: "input",
              },
            },
          });
          setRows(newState);
        }
        if (event?.type === "add") {
          const newState = context.addRow();
          setRows(newState);
        }

        if (event?.type === "remove") {
          const newState = context.removeRow();
          setRows(newState);
        }
      }}
    />
  );
};
