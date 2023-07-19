import { Box, Text } from "..";

import { Row } from "./Row";
import { FilterEventEmitter } from "./EventEmitter";

import { ExperimentalFiltersProps } from ".";

type FiltersProps = Pick<ExperimentalFiltersProps, "value" | "leftOptions"> & {
  emitter: FilterEventEmitter;
  locale: Record<string, string>;
};

export const Filters = ({
  value,
  leftOptions,
  emitter,
  locale,
}: FiltersProps) => (
  <Box
    display="grid"
    __gridTemplateColumns="repeat(2, auto)"
    alignItems="center"
    columnGap={2}
    rowGap={3}
    alignSelf="start"
  >
    <Text>{locale.WHERE}</Text>
    {value.map((item, idx) =>
      typeof item === "string" ? (
        <Text key={idx}>{locale[item]}</Text>
      ) : (
        <Row
          item={item}
          index={idx}
          key={`filterRow-${idx}`}
          leftOptions={leftOptions}
          emitter={emitter}
        />
      )
    )}
  </Box>
);
