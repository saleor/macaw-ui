import React from "react";

import { CloseIcon } from "../icons";
import { makeStyles } from "../theme";
import { Chip, ChipProps } from "./Chip";
import { ChipAdornment } from "./ChipAdornment";
import { ColorSwatch } from "./private/ColorSwatch";

export interface ChipSwatchProps extends Omit<ChipProps, "startAdornment"> {
  onRemove?: () => void;
  color: string;
}

const useStyles = makeStyles({
  swatchPosition: {
    marginLeft: "-10px",
  },
});

export const ChipSwatch = React.forwardRef<HTMLDivElement, ChipSwatchProps>(
  ({ endAdornment, color, onRemove, ...props }, ref) => {
    const classes = useStyles();

    return (
      <Chip
        startAdornment={<ColorSwatch color={color} />}
        startAdornmentClassName={classes.swatchPosition}
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
