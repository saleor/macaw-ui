import clsx from "clsx";
import React from "react";

import { CloseIcon, DragIcon } from "../icons";
import { ChipSwatch } from "./ChipSwatch";
import useStyles from "./styles";

export interface ChipProps {
  /** Makes the Chip removable by clicking "x" */
  removable?: boolean;
  /** Displays icons that suggests to user that the Chip is movable */
  movable?: boolean;
  /** Display color swatch before the Chip */
  swatch?: string;
  oneline?: boolean;
  /** Callback triggered when user clicks the remove button */
  onRemove?: () => void;
  /** Callback triggereed when user clicks on the Chip */
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  /** Strings used inside the Chip */
  labels?: ChipLabels;
}

export type ChipLabels = Record<"a11yRemove", string>;

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      removable = false,
      movable = false,
      swatch,
      oneline,
      onRemove = () => {},
      onClick = () => {},
      labels,
      className,
      children,
    }: ChipProps,
    ref
  ) => {
    const classes = useStyles();

    return (
      <div
        className={clsx(
          classes.chip,
          movable && classes.movable,
          oneline && classes.oneline,
          className
        )}
        onClick={() => onClick()}
        ref={ref}
      >
        {swatch && <ChipSwatch color={swatch} className={classes.addonLeft} />}
        {movable && (
          <DragIcon
            className={clsx(classes.addonLeft, classes.movable, classes.icon)}
            aria-hidden="true"
          />
        )}
        <span>{children}</span>
        {removable && (
          <CloseIcon
            role="button"
            className={clsx(classes.addonRight, classes.icon)}
            onClick={() => onRemove()}
            aria-label={labels?.a11yRemove}
          />
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";
