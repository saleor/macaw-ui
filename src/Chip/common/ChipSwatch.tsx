import React from "react";

import { CloseIcon } from "../../icons";
import { Chip, ChipProps } from "../Chip";
import { ChipAdornment } from "../ChipAdornment";
import { ColorSwatch } from "../ColorSwatch";

export interface ChipSwatchProps extends Omit<ChipProps, "startAdornment"> {
  onRemove?: () => void;
  color: string;
}

export const ChipSwatch = React.forwardRef<HTMLDivElement, ChipSwatchProps>(
  ({ endAdornment, color, onRemove, ...props }, ref) => {
    return (
      <Chip
        startAdornment={<ColorSwatch color={color} />}
        endAdornment={
          onRemove && (
            <ChipAdornment>
              <CloseIcon role="button" onClick={() => onRemove()} />
            </ChipAdornment>
          )
        }
        {...props}
        ref={ref}
      />
    );
  }
);

ChipSwatch.displayName = "ChipSwatch";
