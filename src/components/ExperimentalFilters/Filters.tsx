import { Box, Text } from "..";

import { RowComponent } from "./Row";
import { FilterEventEmitter } from "./EventEmitter";

import { extractConstrains, getRowConstraint } from "./constrains";
import { ExperimentalFiltersProps } from ".";

type FiltersProps = Pick<
  ExperimentalFiltersProps,
  "value" | "leftOptions" | "error"
> & {
  emitter: FilterEventEmitter;
  locale: Record<string, string>;
};

export const Filters = ({
  value,
  leftOptions,
  emitter,
  locale,
  error,
}: FiltersProps) => {
  const constrains = extractConstrains(value);

  return (
    <Box
      display="grid"
      __gridTemplateColumns="repeat(2, auto)"
      alignItems="start"
      columnGap={2}
      rowGap={3}
      alignSelf="start"
    >
      <Text paddingTop={1.5}>{locale.WHERE}</Text>
      {value.map((item, idx) =>
        typeof item === "string" ? (
          <Text key={idx} paddingTop={1.5}>
            {locale[item]}
          </Text>
        ) : (
          <RowComponent
            item={item}
            index={idx}
            key={`filterRow-${idx}`}
            leftOptions={leftOptions}
            emitter={emitter}
            error={error?.row === idx ? error : undefined}
            constrain={getRowConstraint(constrains, item.value?.value)}
          />
        )
      )}
    </Box>
  );
};
