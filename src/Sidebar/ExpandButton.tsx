import { ButtonProps } from "@material-ui/core/Button";
import clsx from "clsx";
import React from "react";
import { ArrowRightIcon } from "../icons";

import { SquareButton } from "../SquareButton";
import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    arrow: {
      transition: theme.transitions.duration.shortest + "ms",
    },
    shrunk: {
      transform: "scaleX(-1)",
    },
  }),
  {
    name: "ExpandButton",
  }
);

export interface ExpandButtonProps extends ButtonProps {
  isShrunk: boolean;
}

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  isShrunk,
  ...rest
}) => {
  const classes = useStyles({});

  return (
    <SquareButton {...rest}>
      <ArrowRightIcon
        className={clsx(classes.arrow, {
          [classes.shrunk]: isShrunk,
        })}
      />
    </SquareButton>
  );
};

ExpandButton.displayName = "ExpandButton";
