import { Meta } from "@storybook/react";
import _ from "lodash";
import { useState } from "react";

import { Box, Text, Button, Popover, CloseIcon } from "..";
import { Row, _ExperimentalFilters } from ".";
import { sprinkles } from "~/theme";

const meta: Meta<typeof _ExperimentalFilters> = {
  title: "Components / _ExperimentalFilters",
  component: _ExperimentalFilters,
};

export default meta;

const leftOptions = [
  { value: "price", label: "Price", type: "1" },
  { value: "category", label: "Categories", type: "2" },
  { value: "rating", label: "Rating", type: "3" },
  { value: "discount", label: "Discount", type: "4" },
];

const value = [
  {
    value: { value: "price", label: "Price", type: "1" },
    condition: {
      options: [
        { type: "number", label: "is", value: "input-1", min: 0, max: 10 },
        { type: "multiselect", label: "has", value: "input-2" },
      ],
      selected: {
        value: "3.13",
        conditionValue: { type: "number", label: "is", value: "input-1" },
      },
    },
  },
  "AND",
  {
    value: { value: "category", label: "Categories", type: "2" },
    condition: {
      options: [{ value: "input-1", label: "are", type: "multiselect" }],
      selected: {
        conditionValue: { value: "input-1", label: "are", type: "multiselect" },
        value: [],
        options: [
          { value: "electronics", label: "Electronics" },
          { value: "clothing", label: "Clothing" },
          { value: "furniture", label: "Furniture" },
        ],
      },
    },
  },
  "OR",
  {
    value: { value: "rating", label: "Rating", type: "3" },
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
    value: { value: "discount", label: "Discount", type: "4" },
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
    value: { value: "discount", label: "Discount", type: "4" },
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
] as Array<Row | string>;

const Filters = () => {
  const [rows, setRows] = useState<Array<Row | string>>(value);

  return (
    <Box>
      <Box
        paddingX={5}
        paddingY={4}
        display="flex"
        gap={1}
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="surfaceNeutralPlain"
      >
        <Text variant="body" size="medium">
          Filter conditions
        </Text>
        <Box display="flex" alignItems="center" gap={2}>
          <Button variant="tertiary">Clear filters</Button>
          <Button variant="tertiary" icon={<CloseIcon />} />
        </Box>
      </Box>

      <Box
        paddingX={5}
        paddingY={3}
        backgroundColor="interactiveNeutralSecondaryHovering"
      >
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
                {
                  value: null,
                  condition: {
                    options: [],
                    selected: {
                      value: "",
                      conditionValue: null,
                      options: [],
                    },
                  },
                },
              ];
              setRows(newState);
            }

            if (event?.type === "row.remove") {
              const index = parseInt(event?.path ?? "", 10);
              if (index === 0) {
                const newState = [...rows.slice(index + 2, rows.length)];
                setRows(newState);
                return;
              }
              const newState = [
                ...rows.slice(0, index - 1),
                ...rows.slice(index + 1, rows.length),
              ];
              setRows(newState);
            }
          }}
        >
          <_ExperimentalFilters.Footer>
            <_ExperimentalFilters.AddRowButton>
              + Add row
            </_ExperimentalFilters.AddRowButton>
            <_ExperimentalFilters.ConfirmButton onClick={() => ({})}>
              Save
            </_ExperimentalFilters.ConfirmButton>
          </_ExperimentalFilters.Footer>
        </_ExperimentalFilters>
      </Box>
    </Box>
  );
};

export const WithItems = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Show filters</Button>
      </Popover.Trigger>
      <Popover.Content align="start">
        <Box __minWidth="200px" __minHeight="100px">
          <Filters />
        </Box>
      </Popover.Content>
    </Popover>
  );
};

export const Loading = () => {};

export const Empty = () => {};
