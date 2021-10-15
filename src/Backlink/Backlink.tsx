import Portal from "@material-ui/core/Portal";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { LayoutButton } from "../LayoutButton";
import { useBacklink } from "./context";
import useStyles from "./styles";
import { ArrowLeftIcon } from "../icons";

export interface AppHeaderProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Backlink: React.FC<AppHeaderProps> = ({
  children,
  disabled,
  onClick,
}) => {
  const classes = useStyles();
  const anchor = useBacklink();

  if (!anchor.current) {
    return null;
  }

  return (
    <Portal container={anchor.current}>
      <LayoutButton
        className={classes.root}
        disabled={disabled}
        onClick={onClick}
        data-test-id="app-header-back-button"
      >
        <ArrowLeftIcon className={classes.backArrow} />
        {children ? (
          <div className={classes.title}>{children}</div>
        ) : (
          <Skeleton className={classes.skeleton} />
        )}
      </LayoutButton>
    </Portal>
  );
};
Backlink.displayName = "Backlink";
