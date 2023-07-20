import { ReactNode } from "react";
import { Box, Divider } from "..";

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
  error?: {
    row: number;
    leftText?: string;
    conditionText?: string;
    rightText?: string;
  };
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
  error,
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
            error={error}
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
