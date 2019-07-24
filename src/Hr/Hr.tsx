import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

interface HrProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.overrides.MuiCard.root.borderColor,
    border: "none",
    display: "block",
    height: 1,
    margin: 0,
    width: "100%"
  }
}));

export const Hr: React.FC<HrProps> = props => {
  const { className } = props;
  const classes = useStyles(props);

  return <hr className={classNames(classes.root, className)} />;
};
Hr.displayName = "Hr";
export default Hr;
