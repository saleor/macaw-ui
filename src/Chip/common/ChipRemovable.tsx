import React from "react";

import { CloseIcon } from "../../icons";
import { Chip, ChipProps } from "../Chip";
import { ChipAdornment } from "../ChipAdornment";

export interface ChipRemovableProps extends ChipProps {
  onRemove?: () => void;
}

export const ChipRemovable = React.forwardRef<
  HTMLDivElement,
  ChipRemovableProps
>(({ endAdornment, onRemove = () => {}, ...props }, ref) => {
  return (
    <Chip
      ref={ref}
      endAdornment={
        <ChipAdornment>
          <CloseIcon role="button" onClick={() => onRemove()} />
          {endAdornment}
        </ChipAdornment>
      }
      {...props}
    />
  );
});

ChipRemovable.displayName = "ChipRemovable";
