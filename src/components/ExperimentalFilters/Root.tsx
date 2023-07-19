import { ReactNode } from "react";
import { Box, Divider, Text } from "..";

import { FilterContext } from "./context";
import { FilterEvent, useEventEmitter } from "./useEvents";
import { Row } from "./Row";
import { LeftOperatorOption } from "./EventEmitter";
import { Filters } from "./Filters";
import { NoValue } from "./NoValue";

export type ExperimentalFiltersProps = {
  value: Array<Row | string>;
  leftOptions: LeftOperatorOption[];
  children?: ReactNode;
  onChange?: (event: FilterEvent["detail"]) => void;
  locale?: Record<string, string>;
};

export const Root = ({
  value,
  onChange,
  leftOptions,
  children,
  locale = {
    WHERE: "Where",
    AND: "and",
    OR: "or",
    noValueText: "Click button below to start filtering",
  },
}: ExperimentalFiltersProps) => {
  const { emitter } = useEventEmitter({
    onChange,
  });

  return (
    <FilterContext.Provider
      value={{ emitter, actionButtonsDisabled: value.length === 0 }}
    >
      <Box height="100%" display="grid" __gridTemplateRows="1fr">
        {value.length > 0 ? (
          <Filters
            value={value}
            leftOptions={leftOptions}
            emitter={emitter}
            locale={locale}
          />
        ) : (
          <NoValue locale={locale} />
        )}
        <Divider />
        {children}
      </Box>
    </FilterContext.Provider>
  );
};
