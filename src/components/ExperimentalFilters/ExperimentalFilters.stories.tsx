import { Meta } from "@storybook/react";
import _ from "lodash";
import { useState } from "react";

import { Box, Text, Button, Popover, CloseIcon, Divider } from "..";
import { Skeleton } from "../Skeleton/Skeleton";
import { Row, _ExperimentalFilters } from ".";

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
        value: ["0", "1"],
      },
    },
  },
] as Array<Row | string>;

const commonHeaderProps = {
  paddingTop: 3,
  paddingX: 3,
  paddingBottom: 1.5,
  display: "flex",
  gap: 1,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "surfaceNeutralPlain",
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
} as const;

const commonFilterProps = {
  padding: 3,
  backgroundColor: "interactiveNeutralSecondaryHovering",
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
} as const;

const Filters = () => {
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
          const newState = _.setWith(
            _.clone(rows),
            event?.path ?? "",
            {
              value: event?.value,
              condition: {
                options: [
                  { type: "number", label: "is", value: "input-1" },
                  {
                    type: "multiselect",
                    label: "has",
                    value: "input-2",
                  },
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
          Add row
        </_ExperimentalFilters.AddRowButton>
        <Box display="flex" gap={3}>
          <_ExperimentalFilters.ClearButton>
            Clear
          </_ExperimentalFilters.ClearButton>
          <_ExperimentalFilters.ConfirmButton onClick={() => ({})}>
            Save
          </_ExperimentalFilters.ConfirmButton>
        </Box>
      </_ExperimentalFilters.Footer>
    </_ExperimentalFilters>
  );
};

export const WithItems = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Show filters</Button>
      </Popover.Trigger>
      <Popover.Content align="start">
        <Box
          __minHeight="250px"
          __minWidth="636px"
          display="grid"
          __gridTemplateRows="auto 1fr"
        >
          <Box {...commonHeaderProps}>
            <Text variant="body" size="medium">
              Conditions
            </Text>
            <Box display="flex" alignItems="center" gap={2}>
              <Popover.Close>
                <Button variant="tertiary" icon={<CloseIcon />} />
              </Popover.Close>
            </Box>
          </Box>
          <Box {...commonFilterProps}>
            <Filters />
          </Box>
        </Box>
      </Popover.Content>
    </Popover>
  );
};

export const Loading = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Show filters</Button>
      </Popover.Trigger>
      <Popover.Content align="start">
        <Box
          __minHeight="250px"
          __minWidth="636px"
          display="grid"
          __gridTemplateRows="auto 1fr"
        >
          <Box {...commonHeaderProps}>
            <Text variant="body" size="medium">
              Conditions
            </Text>
            <Box display="flex" alignItems="center" gap={2}>
              <Popover.Close>
                <Button variant="tertiary" icon={<CloseIcon />} />
              </Popover.Close>
            </Box>
          </Box>
          <Box {...commonFilterProps} display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" gap={3} height="100%">
              <Skeleton height={7} />
              <Skeleton height={7} />
              <Skeleton height={7} />
            </Box>
            <Divider />
            <Box display="flex" gap={4} justifyContent="space-between">
              <Skeleton height={7} __width="60px" />
              <Box display="flex" gap={3}>
                <Skeleton height={7} __width="60px" />
                <Skeleton height={7} __width="60px" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Popover.Content>
    </Popover>
  );
};

// export const Loading = () => {
//   return (
//     <Popover>
//       <Popover.Trigger>
//         <Button>Show filters</Button>
//       </Popover.Trigger>
//       <Popover.Content align="start">
//         <Box
//           __minHeight="250px"
//           __minWidth="636px"
//           display="grid"
//           __gridTemplateRows="auto 1fr"
//         >
//           <Box {...commonHeaderProps}>
//             <Text variant="body" size="medium">
//               Filter conditions
//             </Text>
//             <Box display="flex" alignItems="center" gap={2}>
//               <Popover.Close>
//                 <Button variant="tertiary" icon={<CloseIcon />} />
//               </Popover.Close>
//             </Box>
//           </Box>
//           <Box
//             {...commonFilterProps}
//             display="flex"
//             gap={3}
//             flexDirection="column"
//           >
//             <Skeleton height={7} />
//             <Skeleton height={7} />
//             <Skeleton height={7} />
//             <Divider />
//             <Box display="flex" gap={4} justifyContent="space-between">
//               <Skeleton height={7} __width="20%" />
//               <Skeleton height={7} __width="20%" />
//             </Box>
//           </Box>
//         </Box>
//       </Popover.Content>
//     </Popover>
//   );
// };
