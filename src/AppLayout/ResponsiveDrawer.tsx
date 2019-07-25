import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";
import classNames from "classnames";

import { drawerWidth, drawerWidthExpanded } from "./consts";

const useStyles = makeStyles((theme: Theme) => ({
  drawerDesktop: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    height: "100vh",
    padding: 0,
    position: "fixed" as "fixed",
    transition: "width 0.2s ease",
    width: drawerWidthExpanded
  },
  drawerDesktopSmall: {
    width: drawerWidth
  },
  drawerMobile: {
    width: drawerWidthExpanded
  },
  root: {
    overflow: "visible !important",
    transition: "width 0.2s ease"
  }
}));

interface ResponsiveDrawerProps {
  children?: React.ReactNode;
  expanded: boolean;
  open: boolean;
  onClose: () => void;
}

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = props => {
  const { children, onClose, open, expanded } = props;
  const classes = useStyles(props);

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="persistent"
          open
          classes={{
            paper: classNames(classes.root, {
              [classes.drawerDesktop]: expanded,
              [classes.drawerDesktopSmall]: !expanded
            })
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          onClose={onClose}
          open={open}
          classes={{ paper: classes.drawerMobile }}
        >
          {children}
        </Drawer>
      </Hidden>
    </>
  );
};
export default ResponsiveDrawer;
