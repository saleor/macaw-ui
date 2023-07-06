import { ReactNode } from "react";
import { Box, Text } from "..";

import { FilterContext } from "./context";
import { FilterEvent, useEventEmitter } from "./useEvents";
import { Row } from "./Row";
import { LeftOperatorOption } from "./EventEmitter";

export type ExperimentalFiltersProps = {
  value: Array<Row | string>;
  leftOptions: LeftOperatorOption[];
  children?: ReactNode;
  onChange: (event: FilterEvent["detail"]) => void;
};

const locale: Record<string, string> = {
  WHERE: "Where",
  AND: "And",
  OR: "Or",
};

export const Root = ({
  value,
  onChange,
  leftOptions,
  children,
}: ExperimentalFiltersProps) => {
  const { emitter } = useEventEmitter({
    onChange,
  });

  return (
    <FilterContext.Provider value={{ emitter }}>
      <Box>
        <Box
          display="grid"
          __gridTemplateColumns="repeat(2, auto)"
          __placeItems="center self-start"
          gap={1}
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
        {children}
      </Box>
    </FilterContext.Provider>
  );
};
