import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import React from "react";
import useLocalStorage from "react-use-localstorage";

import { Logo } from "../icons/Logo";
import { localStorageKeys } from "../localStorageKeys";
import { ExpandButton } from "./ExpandButton";
import { MenuItem, menuWidth, shrunkMenuWidth } from "./MenuItem";
import { SideBarProps } from "./types";

const useStyles = makeStyles(
  (theme) => ({
    expandButton: {
      marginLeft: theme.spacing(2),
    },
    float: {
      height: "100vh",
      position: "fixed",
    },
    logo: {
      margin: `36px 0 ${theme.spacing(3)} ${theme.spacing(3.5)}`,
    },
    root: {
      transition: "width 0.5s ease",
      width: menuWidth,
      zIndex: 100,
    },
    rootShrink: {
      width: shrunkMenuWidth,
    },
    toolbarContainer: {
      margin: theme.spacing(1, 0, 1, 2),
    },
  }),
  {
    name: "SideBar",
  }
);

export const SideBar: React.FC<SideBarProps & { active: string }> = ({
  active,
  menuItems,
  toolbar,
  onMenuItemClick,
}) => {
  const classes = useStyles({});
  const [isShrunkStr, setShrink] = useLocalStorage(
    localStorageKeys.menuShrink,
    false.toString()
  );
  const isShrunk = isShrunkStr === "true";

  return (
    <div
      className={clsx(classes.root, {
        [classes.rootShrink]: isShrunk,
      })}
    >
      <div className={classes.float}>
        <div className={classes.logo}>
          <Logo />
        </div>
        {menuItems.map((menuItem) => (
          <MenuItem
            active={active === menuItem.id}
            isMenuShrunk={isShrunk}
            menuItem={menuItem}
            onClick={onMenuItemClick}
            key={menuItem.ariaLabel}
          />
        ))}
        {toolbar && <div className={classes.toolbarContainer}>{toolbar}</div>}
        <ExpandButton
          className={classes.expandButton}
          isShrunk={isShrunk}
          onClick={() => setShrink((!isShrunk).toString())}
        />
      </div>
    </div>
  );
};

SideBar.displayName = "SideBar";
