import {
  OverridableComponent,
  OverrideProps,
} from "@material-ui/core/OverridableComponent";
import clsx from "clsx";
import React from "react";

import { UserInteraction } from "../../types/utils";
import useStyles from "./styles";

export interface PillLinkInnerProps {
  className?: string;
  children?: React.ReactNode;
  state?: UserInteraction;
}
export interface PillLinkTypeMap<P = {}, D extends React.ElementType = "a"> {
  props: P & PillLinkInnerProps;
  classKey: never;
  defaultComponent: D;
}

export type PillLinkProps<
  D extends React.ElementType = PillLinkTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<PillLinkTypeMap<P, D>, D>;

interface PillLinkPropsWithComponent extends PillLinkProps {
  component?: React.ElementType;
}

const _PillLink: React.FC<PillLinkPropsWithComponent> = ({
  children,
  component: Component = "a",
  className,
  state = "default",
  ...props
}) => {
  const classes = useStyles();

  return (
    <Component
      className={clsx(classes.root, className, {
        [classes.hover]: state === "hover",
        [classes.active]: state === "active",
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
_PillLink.displayName = "PillLink";
export const PillLink = _PillLink as OverridableComponent<PillLinkTypeMap>;
