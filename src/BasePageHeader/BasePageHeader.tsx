import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  action: {
    flex: "0 0 auto"
  },
  grid: {
    padding: theme.spacing.unit * 2
  },
  menuButton: {
    flex: "0 0 auto",
    marginLeft: theme.spacing.unit * -2,
    marginRight: theme.spacing.unit * 3,
    marginTop: -theme.spacing.unit * 2
  },
  root: {
    alignItems: "center",
    display: "flex",
    marginBottom: theme.spacing.unit * 3
  },
  subtitle: {
    alignItems: "center",
    display: "flex",
    marginBottom: theme.spacing.unit * 2
  },
  title: {
    flex: 1,
    paddingBottom: theme.spacing.unit * 2
  }
}));

interface BasePageHeaderProps {
  children?: React.ReactNode;
  className?: string;
  title: React.ReactNode;
}

const BasePageHeader: React.FC<BasePageHeaderProps> = props => {
  const { children, className, title } = props;
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.root, className)}>
      {title}
      <div className={classes.action}>{children}</div>
    </div>
  );
};
BasePageHeader.displayName = "BasePageHeader";
export default BasePageHeader;
