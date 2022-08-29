import Tab, { TabProps } from "@mui/material/Tab";
import React from "react";

import useStyles from "./styles";

export const PageTab: React.FC<TabProps> = (props) => {
  const classes = useStyles();

  return (
    <Tab
      classes={{
        root: classes.tabRoot,
      }}
      disableRipple
      {...props}
    />
  );
};
PageTab.displayName = "PageTab";
