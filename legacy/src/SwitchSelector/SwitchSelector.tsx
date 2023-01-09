import React from "react";

import { makeStyles } from "..";

const useStyles = makeStyles((theme) => ({
  switchSelector: {
    border: `1px solid ${theme.palette.saleor.main[5]}`,
    padding: "6px",
    borderRadius: 4,
    width: "fit-content",
  },
}));

export const SwitchSelector: React.FC<{}> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.switchSelector}>{children}</div>;
};

SwitchSelector.displayName = "SwitchSelector";
