import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export interface PillLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  state?: "default" | "hover" | "active";
}

export const PillLink: React.FC<PillLinkProps> = ({
  children,
  className,
  state = "default",
  ...props
}) => {
  const classes = useStyles();

  return (
    <a
      className={clsx(classes.root, className, {
        [classes.hover]: state === "hover",
        [classes.active]: state === "active",
      })}
      {...props}
    >
      {children}
    </a>
  );
};
PillLink.displayName = "PillLink";
