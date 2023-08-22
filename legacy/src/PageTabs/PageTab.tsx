import Tab, { TabProps } from "@material-ui/core/Tab";
import React from "react";

import useStyles from "./styles";
import { ButtonBaseProps } from "@material-ui/core";

type Props = ButtonBaseProps &
  TabProps & {
    component?: React.ElementType<any>;
  };

type PropsWithComponentProps<
  C extends React.ElementType<any> | React.ElementType = "button"
> = Props & React.ComponentProps<C>;

export const PageTab: React.FC<PropsWithComponentProps> = (props) => {
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
