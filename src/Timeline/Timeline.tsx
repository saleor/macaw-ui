import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderColor: theme.overrides.MuiCard.root.borderColor,
    borderStyle: "solid",
    borderWidth: "0 0 0 2px",
    marginLeft: 20,
    paddingLeft: theme.spacing.unit * 3
  }
}));

interface TimelineProps {
  children?: React.ReactNode;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = props => {
  const { children, className } = props;
  const classes = useStyles(props);

  return <div className={classNames(className, classes.root)}>{children}</div>;
};

Timeline.displayName = "Timeline";
export default Timeline;
