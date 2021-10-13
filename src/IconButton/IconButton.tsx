import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type IconButtonProps<T extends React.ElementType = "button"> = Omit<
  MuiIconButtonProps<T>,
  "variant"
> & {
  error?: boolean;
};

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  error,
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiIconButton
      className={clsx(className, {
        [classes.error]: error,
        [classes.disabledError]: error && props.disabled,
      })}
      disableRipple
      {...props}
    />
  );
};
IconButton.displayName = "Button";
