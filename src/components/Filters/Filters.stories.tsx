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
  {
    value: "price",
    condition: {
      options: [
        { type: "input.number", label: "is", value: "input-1" },
        { type: "multiselect", label: "has", value: "input-2" },
      ],
      selected: {
        value: "3.13",
        conditionValue: "input-1",
      },
    },
  },
  "AND",
  {
    value: "category",
    condition: {
      options: [{ value: "input-1", label: "are", type: "multiselect" }],
      selected: {
        conditionValue: "input-1",
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
      options: [{ value: "input-1", label: "is", type: "combobox" }],
      selected: {
        conditionValue: "input-1",
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
      options: [{ value: "input-1", label: "is", type: "select" }],
      selected: {
        conditionValue: "input-1",
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
            value: [],
          });
          setRows(newState);
        }

        if (event?.type === "update.leftOperator") {
          const newState = context.updateLeftOperator({
            condition: {
              options: [{ value: "input", label: "is", type: "input.text" }],
              selected: {
                value: "",
                conditionValue: "input",
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
