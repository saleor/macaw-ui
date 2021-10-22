import clsx from "clsx";
import React from "react";

import { Logo } from "../icons/Logo";
import { LogoLight } from "../icons/LogoLight";
import { localStorageKeys } from "../localStorageKeys";
import { makeStyles, useTheme } from "../theme";
import useLocalStorage from "../tools/useLocalStorage";
import { ExpandButton } from "./ExpandButton";
import { MenuItem, menuWidth, shrunkMenuWidth } from "./MenuItem";
import { BaseSidebarProps } from "./types";

const useStyles = makeStyles(
  (theme) => ({
    expandButton: {
      marginLeft: theme.spacing(2),
    },
    float: {
      height: "100vh",
      position: "fixed",
      paddingRight: "2em",
      overflowY: "auto",
    },
    logo: {
      margin: `36px 0 ${theme.spacing(3)} ${theme.spacing(3.5)}`,
    },
    root: {
      transition: "width 0.5s ease",
      minWidth: menuWidth,
      width: menuWidth,
      zIndex: 100,
    },
    rootShrink: {
      minWidth: shrunkMenuWidth,
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

export interface SidebarProps extends BaseSidebarProps {
  active: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  active,
  menuItems,
  toolbar,
  onMenuItemClick,
}) => {
  const theme = useTheme();
  const classes = useStyles({});
  const { value: isShrunkStr, setValue: setShrink } = useLocalStorage(
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
          {theme.themeType === "light" ? <Logo /> : <LogoLight />}
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

Sidebar.displayName = "SideBar";
