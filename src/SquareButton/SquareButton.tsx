import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import { fade } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      "&:hover, &:focus": {
        background: fade(theme.palette.primary.light, 0.2),
      },
      background: theme.palette.background.paper,
      borderRadius: 4,
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

export const SquareButton: React.FC<ButtonBaseProps> = React.forwardRef(
  ({ className, ...rest }, ref) => {
    const classes = useStyles({});

    return (
      <ButtonBase
        className={clsx(classes.root, className)}
        ref={ref}
        {...rest}
      />
    );
  }
);

SquareButton.displayName = "SquareButton";
