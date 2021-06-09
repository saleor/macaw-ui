import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import clsx from "clsx";
import React from "react";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      "&:hover, &:focus": {
        background: "#daedeb",
      },
      background: theme.palette.background.paper,
      borderRadius: 16,
      color: theme.palette.primary.main,
      height: 48,
      transition: theme.transitions.duration.shortest + "ms",
      width: 48,
    },
  }),
  {
    name: "ExpandButton",
  }
);

export const SquareButton: React.FC<ButtonBaseProps> = ({
  className,
  ...rest
}) => {
  const classes = useStyles({});

  return <ButtonBase className={clsx(classes.root, className)} {...rest} />;
};

SquareButton.displayName = "SquareButton";
