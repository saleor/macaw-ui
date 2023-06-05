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
    type: 1,
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
    type: 2,
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
    type: 3,
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
    type: 4,
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
      onChange={(event) => {
        if (event?.type === "update.rightOperator") {
          const newState = _.setWith(
            _.clone(rows),
            event?.path ?? "",
            event?.value,
            _.clone
          );
          setRows(newState);
        }

        if (event?.type === "update.condition") {
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

        if (event?.type === "update.leftOperator") {
          const newState = _.setWith(
            _.clone(rows),
            event?.path ?? "",
            {
              value: event?.value,
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
            _.clone
          );
          setRows(newState);
        }
        if (event?.type === "add") {
          const newState = [
            ...rows,
            "AND",
            { name: "", value: "", type: event?.rowType },
          ];
          setRows(newState);
        }

        if (event?.type === "remove") {
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
