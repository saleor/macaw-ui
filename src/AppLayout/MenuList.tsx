import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";
import SVG from "react-inlinesvg";

import MenuNested from "./MenuNested";
import { IActiveSubMenu, IMenuItem } from "./types";

const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    "& svg": {
      height: 32,
      width: 32
    },
    display: "inline-block"
  },
  menuIsActive: {
    boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.2)"
  },
  menuItemInnerContent: {
    "& path": {
      transition: "fill 0.5s ease"
    },
    "&:hover": {
      "& path": {
        fill: theme.palette.primary.main
      },
      "&:before": {
        borderLeft: `solid 2px ${theme.palette.primary.main}`,
        content: "''",
        height: 33,
        left: -25,
        position: "absolute"
      },
      color: theme.palette.primary.main
    },
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    position: "relative"
  },
  menuList: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginLeft: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 3
  },
  menuListItem: {
    alignItems: "center",
    display: "block",
    marginBottom: theme.spacing.unit * 5,
    paddingLeft: 0,
    textDecoration: "none",
    transition: theme.transitions.duration.standard + "ms"
  },
  menuListItemActive: {
    "& $menuListItemText": {
      color: theme.palette.primary.main
    },
    "& path": {
      color: theme.palette.primary.main,
      fill: theme.palette.primary.main
    }
  },
  menuListItemOpen: {
    "&:after": {
      borderBottom: `10px solid transparent`,
      borderLeft: `10px solid ${theme.palette.background.paper}`,
      borderTop: `10px solid transparent`,
      content: "''",
      height: 0,
      position: "absolute",
      right: -35,
      top: 15,
      width: 0
    },
    position: "relative"
  },
  menuListItemText: {
    "&:hover": {
      color: theme.palette.primary.main
    },
    cursor: "pointer",
    display: "inline-block",
    fontSize: "1rem",
    fontWeight: 500,
    opacity: 1,
    paddingLeft: 16,
    textTransform: "uppercase",
    transition: `opacity  ${theme.transitions.duration.shorter}ms ease 0.1s`
  },
  menuListItemTextHide: {
    opacity: 0,
    position: "absolute",
    transition: `opacity  ${theme.transitions.duration.shorter}ms ease`
  },
  subMenu: {
    padding: "0 15px"
  },
  subMenuDrawer: {
    background: "#000",
    cursor: "pointer",
    height: "100vh",
    left: 0,
    opacity: 0.2,
    position: "absolute",
    top: 0,
    width: 0,
    zIndex: -2
  },
  subMenuDrawerOpen: {
    width: `100vw`
  }
}));

interface MenuListProps {
  className?: string;
  createHref: (relativeUrl: string) => string;
  menuItems: IMenuItem[];
  isMenuActive: (menuItem: IMenuItem) => boolean;
  isMenuSmall: boolean;
  onMenuItemClick: (url: string, event: React.MouseEvent) => void;
}

const MenuList: React.FC<MenuListProps> = props => {
  const {
    className,
    createHref,
    menuItems,
    isMenuActive,
    isMenuSmall,
    onMenuItemClick
  } = props;
  const classes = useStyles(props);
  const [activeSubMenu, setActiveSubMenu] = React.useState<IActiveSubMenu>({
    isActive: false,
    label: null
  });

  const handleSubMenu = (itemLabel: string) => {
    setActiveSubMenu({
      isActive:
        itemLabel === activeSubMenu.label ? !activeSubMenu.isActive : true,
      label: itemLabel
    });
  };

  const closeSubMenu = (menuItemUrl: string, event: React.MouseEvent) => {
    setActiveSubMenu({
      isActive: false,
      label: null
    });
    if (menuItemUrl && event) {
      onMenuItemClick(menuItemUrl, event);
      event.stopPropagation();
      event.preventDefault();
    }
  };

  return (
    <div
      className={classNames(className, {
        [classes.menuIsActive]: activeSubMenu.isActive
      })}
    >
      {menuItems.map(menuItem => {
        if (!menuItem.url) {
          const isAnyChildActive = menuItem.children.reduce(
            (acc, child) => acc || isMenuActive(child),
            false
          );

          return (
            <div
              className={classNames(classes.menuListItem, {
                [classes.menuListItemActive]: isAnyChildActive
              })}
            >
              <div
                className={classNames(classes.menuItemInnerContent, {
                  [classes.menuListItemOpen]:
                    menuItem.ariaLabel === activeSubMenu.label &&
                    activeSubMenu.isActive
                })}
                onClick={() => handleSubMenu(menuItem.ariaLabel)}
              >
                <div className={classes.menuIcon}>
                  <SVG src={menuItem.icon} />
                </div>
                <Typography
                  aria-label={menuItem.ariaLabel}
                  className={classNames(classes.menuListItemText, {
                    [classes.menuListItemTextHide]: !isMenuSmall
                  })}
                >
                  {menuItem.label}
                </Typography>
              </div>
              <MenuNested
                activeItem={activeSubMenu}
                closeSubMenu={setActiveSubMenu}
                createHref={createHref}
                menuItem={menuItem}
                onMenuItemClick={onMenuItemClick}
                handleSubMenu={handleSubMenu}
                title={menuItem.label}
                icon={menuItem.icon}
                ariaLabel={menuItem.ariaLabel}
              />
              <div
                onClick={event => closeSubMenu(null, event)}
                className={classNames(classes.subMenuDrawer, {
                  [classes.subMenuDrawerOpen]: activeSubMenu.isActive
                })}
              />
            </div>
          );
        }

        return (
          <a
            className={classNames(classes.menuListItem, {
              [classes.menuListItemActive]: isMenuActive(menuItem)
            })}
            href={createHref(menuItem.url)}
            onClick={event => closeSubMenu(menuItem.url, event)}
            key={menuItem.label}
          >
            <div className={classes.menuItemInnerContent}>
              <div className={classes.menuIcon}>
                <SVG src={menuItem.icon} />
              </div>
              <Typography
                aria-label={menuItem.ariaLabel}
                className={classNames(classes.menuListItemText, {
                  [classes.menuListItemTextHide]: !isMenuSmall
                })}
              >
                {menuItem.label}
              </Typography>
            </div>
          </a>
        );
      })}
    </div>
  );
};

MenuList.displayName = "MenuList";
export default MenuList;
