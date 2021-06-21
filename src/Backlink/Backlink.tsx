import Portal from "@material-ui/core/Portal";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { useBacklink } from "./context";
import useStyles from "./styles";

export interface AppHeaderProps {
  children: React.ReactNode;
  onBack: () => void;
}

export const Backlink: React.FC<AppHeaderProps> = ({ children, onBack }) => {
  const classes = useStyles();
  const anchor = useBacklink();

  if (!anchor.current) {
    return null;
  }

  return (
    <Portal container={anchor.current}>
      <div
        className={classes.root}
        onClick={onBack}
        data-test-id="app-header-back-button"
      >
        <ArrowBackIcon className={classes.backArrow} />
        {children ? (
          <Typography className={classes.title}>{children}</Typography>
        ) : (
          <Skeleton className={classes.skeleton} />
        )}
      </div>
    </Portal>
  );
};
Backlink.displayName = "Backlink";
