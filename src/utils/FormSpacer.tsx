import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3)
  }
}));

interface FormSpacerProps {
  children?: React.ReactNode;
}

export const FormSpacer: React.FC<FormSpacerProps> = props => {
  const { children } = props;
  const classes = useStyles(props);

  return <div className={classes.root}>{children}</div>;
};

FormSpacer.displayName = "FormSpacer";
export default FormSpacer;
