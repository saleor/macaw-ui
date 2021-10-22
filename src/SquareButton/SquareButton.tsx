import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import clsx from "clsx";
import React from "react";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    disabled: {
      "&$root": {
        color: theme.palette.grey[500],
      },
    },
    root: {
      "&:hover, &:focus-visible": {
        background: theme.palette.saleor.active[5],
      },
      "&:active": {
        background: theme.palette.saleor.active[4],
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
        className={clsx(classes.root, className, {
          [classes.disabled]: rest.disabled,
        })}
        disableRipple
        ref={ref}
        {...rest}
      />
    );
  }
);

SquareButton.displayName = "SquareButton";
