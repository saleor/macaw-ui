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
  { value: "price", label: "Price", type: 1 },
  { value: "category", label: "Category", type: 2 },
  { value: "rating", label: "Rating", type: 3 },
  { value: "discount", label: "Discount", type: 4 },
];

const value = [
  {
    value: { value: "price", label: "Price", type: 1 },
    type: 1,
    loading: true,
    condition: {
      loading: true,
      options: [
        { type: "number", label: "is", value: "input-1", min: 0, max: 10 },
        { type: "multiselect", label: "has", value: "input-2" },
      ],
      selected: {
        loading: true,
        value: "3.13",
        conditionValue: { type: "number", label: "is", value: "input-1" },
      },
    },
  },
  "AND",
  {
    value: { value: "category", label: "Category", type: 2 },
    type: 2,
    condition: {
      options: [{ value: "input-1", label: "are", type: "multiselect" }],
      selected: {
        conditionValue: { value: "input-1", label: "are", type: "multiselect" },
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
    value: { value: "rating", label: "Rating", type: 3 },
    type: 3,
    condition: {
      options: [{ value: "input-1", label: "is", type: "combobox" }],
      selected: {
        conditionValue: { value: "input-1", label: "is", type: "combobox" },
        value: null,
        options: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ],
      },
    },
  },
  "AND",
  {
    value: { value: "discount", label: "Discount", type: 4 },
    type: 4,
    condition: {
      options: [{ value: "input-1", label: "is", type: "select" }],
      selected: {
        conditionValue: { value: "input-1", label: "is", type: "select" },
        value: "",
        options: [
          { value: "100%", label: "100%" },
          { value: "50%", label: "50%" },
        ],
      },
    },
  },
  "OR",
  {
    value: { value: "discount", label: "Discount", type: 4 },
    type: 4,
    condition: {
      options: [{ value: "input-1", label: "between", type: "number.range" }],
      selected: {
        conditionValue: {
          value: "input-1",
          label: "between",
          type: "number.range",
        },
        value: {
          start: "0",
          end: "1",
        },
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
      onChange={(event) => {
        if (event?.type === "rightOperator.onChange") {
          const newState = _.setWith(
            _.clone(rows),
            event?.path ?? "",
            event?.value,
            _.clone
          );
          setRows(newState);
        }

        if (event?.type === "condition.onChange") {
          const newState = _.setWith(
            _.clone(rows),
            event?.path ?? "",
            {
              value: [],
              options: [
                { value: "electronics", label: "Electronics" },
                { value: "clothing", label: "Clothing" },
              ],
              conditionValue: event?.value,
            },
            _.clone
          );
          setRows(newState);
        }

        if (event?.type === "leftOperator.onChange") {
          console.log(event);
          const newState = _.setWith(
            _.clone(rows),
            event?.path ?? "",
            {
              value: event?.value,
              condition: {
                options: [
                  { type: "number", label: "is", value: "input-1" },
                  { type: "multiselect", label: "has", value: "input-2" },
                ],
                selected: {
                  value: "",
                  conditionValue: {
                    type: "number",
                    label: "is",
                    value: "input-1",
                  },
                },
              },
            },
            _.clone
          );
          setRows(newState);
        }
        if (event?.type === "row.add") {
          const newState = [
            ...rows,
            "AND",
            { value: null, type: event?.rowType },
          ];
          setRows(newState);
        }

        if (event?.type === "row.remove") {
          const index = parseInt(event?.path ?? "", 10);
          const newState = [
            ...rows.slice(0, index - 1),
            ...rows.slice(index + 2, rows.length),
          ];
          setRows(newState);
        }
      }}
    />
  );
};
