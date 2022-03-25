import clsx from "clsx";
import React from "react";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    adornment: {
      color: theme.palette.primary.contrastText,
      opacity: 0.6,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeOut,
      }),
      lineHeight: 0,
      "&:hover": {
        opacity: 1,
      },
    },
    defaultCursor: {
      cursor: "inherit",
    },
  }),
  { name: "ChipAdornment" }
);

export interface ChipAdornmentProps {
  className?: string;
  inheirtCursor?: boolean;
}

export const ChipAdornment: React.FC<ChipAdornmentProps> = ({
  className,
  inheirtCursor,
  children,
}) => {
  const classes = useStyles();

  return (
    <span
      className={clsx(
        classes.adornment,
        inheirtCursor && classes.defaultCursor,
        className
      )}
    >
      {children}
    </span>
  );
};
