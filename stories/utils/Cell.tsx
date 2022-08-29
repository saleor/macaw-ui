import useGuideStyles from "../../src/utils/guideStyles";
import * as React from "react";

export const Cell: React.FC = ({ children }) => {
  const classes = useGuideStyles();

  return <div className={classes.cell}>{children}</div>;
};
