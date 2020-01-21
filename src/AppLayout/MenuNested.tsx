import Hidden from "@material-ui/core/Hidden";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";
import SVG from "react-inlinesvg";

import ArrowMenuBack from "../icons/ArrowMenuBack";
import { drawerWidthExpanded } from "./consts";
import { IActiveSubMenu, IMenuItem } from "./types";

const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    "& svg": {
      height: 32,
      width: 32
    },
    display: "inline-block",
    position: "relative",
    top: 8
  },
  menuListNested: {
    background: theme.palette.background.paper,
    height: "100vh",
    padding: 32,
    position: "absolute",
    right: 0,
    top: 0,
    transition: `right  ${theme.transitions.duration.shorter}ms ease`,
    width: 300,
    zIndex: -1
  },
  menuListNestedClose: {
    "& svg": {
      fill: theme.palette.primary.main,
      left: 7,
      position: "relative",
      top: -2
    },
    border: `solid 1px #EAEAEA`,
    borderRadius: "100%",
    cursor: "pointer",
    height: 32,
    position: "absolute",
    right: 32,
    top: 35,
    transform: "rotate(180deg)",
    width: 32
  },
  menuListNestedHide: {
    opacity: 0
  },
  menuListNestedIcon: {
    "& path": {
      fill: "initial"
    },
    "& svg": {
      height: 32,
      position: "relative",
      top: 7,
      width: 32
    }
  },
  menuListNestedIconDark: {
    "& path": {
      fill: theme.palette.common.white
    }
  },
  menuListNestedItem: {
    "&:hover": {
      "& p": {
        color: theme.palette.primary.main
      }
    },
    display: "block",
    marginTop: theme.spacing(2),
    textDecoration: "none"
  },
  menuListNestedOpen: {
    [theme.breakpoints.down("sm")]: {
      right: 0,
      width: drawerWidthExpanded,
      zIndex: 2
    },
    right: -300,
    zIndex: -1
  },
  subHeader: {
    borderBottom: "solid 1px #EAEAEA",
    fontSize: "24px !important",
    margin: "30px",
    paddingBottom: 20
  },
  subHeaderDark: {
    borderBottom: "solid 1px #252728"
  },
  subHeaderTitle: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0
    },
    display: "inline",
    paddingLeft: 10
  }
}));

export interface MenuNestedProps {
  activeItem: IActiveSubMenu;
  ariaLabel: string;
  createHref: (relativeUrl: string) => string;
  closeSubMenu: ({ isActive, label }: IActiveSubMenu) => void;
  icon: string;
  menuItem: IMenuItem;
  title: string;
  handleSubMenu: (itemLabel: string) => void;
  onMenuItemClick: (url: string, event: React.MouseEvent) => void;
}

const MenuNested: React.FC<MenuNestedProps> = props => {
  const {
    activeItem,
    ariaLabel,
    closeSubMenu,
    createHref,
    icon,
    menuItem,
    onMenuItemClick,
    title
  } = props;
  const classes = useStyles(props);
  const menuItems = menuItem.children;

  const closeMenu = (menuItemUrl: string, event: React.MouseEvent) => {
    onMenuItemClick(menuItemUrl, event);
    closeSubMenu({
      isActive: false,
      label: null
    });
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <>
      <div
        className={classNames(classes.menuListNested, {
          [classes.menuListNestedOpen]:
            activeItem.label === ariaLabel && activeItem.isActive
        })}
      >
        <Typography className={classes.subHeader} variant="h5">
          <Hidden mdUp>
            <SVG className={classes.menuListNestedIcon} src={icon} />
          </Hidden>
          <div className={classes.subHeaderTitle}>{title}</div>
          <Hidden mdUp>
            <div
              className={classes.menuListNestedClose}
              onClick={() =>
                closeSubMenu({
                  isActive: false,
                  label: null
                })
              }
            >
              <ArrowMenuBack />
            </div>
          </Hidden>
        </Typography>
        {menuItems.map(item => {
          return (
            <a
              className={classNames(classes.menuListNestedItem)}
              href={createHref(item.url)}
              onClick={event => closeMenu(item.url, event)}
              key={item.label}
            >
              <SVG className={classes.menuIcon} src={item.icon} />
              <Typography aria-label={item.ariaLabel}>{item.label}</Typography>
            </a>
          );
        })}
      </div>
    </>
  );
};

MenuNested.displayName = "MenuNester";
export default MenuNested;
