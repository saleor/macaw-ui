import clsx from "clsx";
import React from "react";

import { DragIcon } from "../icons";
import { makeStyles } from "../theme";
import { Chip, ChipProps } from "./Chip";
import { ChipAdornment } from "./ChipAdornment";

export interface ChipMovableProps extends ChipProps {}

const useStyles = makeStyles(
  () => ({
    root: {
      cursor: "move",
    },
  }),
  { name: "ChipMovable" }
);

export const ChipMovable = React.forwardRef<HTMLDivElement, ChipMovableProps>(
  ({ startAdornment, className, ...props }, ref) => {
    const classes = useStyles();

    return (
      <Chip
        className={clsx(classes.root, className)}
        startAdornment={
          <ChipAdornment inheirtCursor>
            <DragIcon aria-hidden="true" />
            {startAdornment}
          </ChipAdornment>
        }
        {...props}
        ref={ref}
      />
    );
  }
);

ChipMovable.displayName = "ChipMovable";
