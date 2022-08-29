import Tabs, { TabsProps } from "@mui/material/Tabs";
import React from "react";

import useStyles from "./styles";

export const PageTabs: React.FC<
  Omit<TabsProps, "onChange"> & {
    onChange: (value: string) => void;
  }
> = (props) => {
  const classes = useStyles();

  return (
    <Tabs
      {...props}
      classes={{
        flexContainer: classes.containerFlex,
        root: classes.containerRoot,
      }}
      TabIndicatorProps={{
        style: { display: "none" },
      }}
      onChange={(_, value) => props.onChange(value)}
    />
  );
};
PageTabs.displayName = "PageTabs";
