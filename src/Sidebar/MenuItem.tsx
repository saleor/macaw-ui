import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { fade } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import SVG from "react-inlinesvg";

import { makeStyles } from "../theme";
import { SidebarMenuItem } from "./types";

export interface MenuItemProps {
  active: boolean;
  isMenuShrunk: boolean;
  menuItem: SidebarMenuItem;
  onClick: (url: string) => void;
}

export const menuWidth = 210;
export const shrunkMenuWidth = 72;

const useStyles = makeStyles(
  (theme) => ({
    hideLabel: {
      "&$label": {
        opacity: 0,
      },
    },
    icon: {
      "& svg": {
        height: 24,
        width: 24,
      },
      marginRight: theme.spacing(1.5),
      transition: theme.transitions.duration.shortest + "ms",
    },
    label: {
      cursor: "pointer",
      display: "block",
      fontSize: 16,
      fontWeight: "bold",
      opacity: 1,
      transition: theme.transitions.duration.shortest + "ms",
    },
    labelRoot: {
      position: "absolute",
      left: 72,
      width: 200,
      textAlign: "left",
      pointerEvents: "none",
    },
    menuItemBtn: {
      "&:focus": {
        color: theme.palette.primary.main,
        outline: 0,
      },
      background: "none",
      border: "none",
      color: "inherit",
      cursor: "pointer",
      display: "inline-flex",
      margin: 0,
      padding: 0,
    },
    paper: {
      borderRadius: 16,
      boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.16)",
      cursor: "default",
      padding: theme.spacing(3),
      textAlign: "left",
    },
    popper: {
      marginLeft: theme.spacing(3),
      zIndex: 2,
    },
    root: {
      "&:hover, &:focus": {
        color: theme.palette.primary.main,
        outline: 0,
      },
      borderBottomRightRadius: 100,
      borderTopRightRadius: 100,
      color: fade(theme.palette.text.primary, 0.6),
      cursor: "pointer",
      display: "flex",
      height: 56,
      marginBottom: theme.spacing(),
      overflow: "hidden",
      padding: theme.spacing(2, 3, 2, 3.5),
      transition: theme.transitions.duration.shortest + "ms",
      width: shrunkMenuWidth,
    },
    rootActive: {
      "&$root": {
        background: theme.palette.background.paper,
        boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.16)",
        color: theme.palette.primary.main,
      },
    },
    rootExpanded: {
      width: menuWidth,
    },
    subMenuLabel: {
      "&$label": {
        "&:not(:last-child)": {
          marginBottom: theme.spacing(2),
        },
      },
      "&:hover, &:focus": {
        color: theme.palette.primary.main,
        outline: 0,
      },
      background: "none",
      border: "none",
      color: fade(theme.palette.text.primary, 0.6),
      padding: 0,
      textAlign: "left",
      textDecoration: "none",
      whiteSpace: "nowrap",
    },
  }),
  {
    name: "MenuItem",
  }
);

export const MenuItem: React.FC<MenuItemProps> = ({
  active,
  menuItem,
  isMenuShrunk,
  onClick,
}) => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);
  const anchor = React.useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent, menuItem: SidebarMenuItem) => {
    event.stopPropagation();
    if (menuItem.children) {
      setOpen(true);
    } else {
      onClick(menuItem.url!);
      setOpen(false);
    }
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.rootActive]: active,
        [classes.rootExpanded]: !isMenuShrunk,
      })}
      ref={anchor}
      onClick={(event) => handleClick(event, menuItem)}
    >
      <button
        className={classes.menuItemBtn}
        data-test="menu-item-label"
        data-test-id={menuItem.id}
      >
        {menuItem.iconSrc && (
          <SVG className={classes.icon} src={menuItem.iconSrc} />
        )}
        <Typography
          aria-label={menuItem.ariaLabel}
          className={clsx(classes.label, classes.labelRoot, {
            [classes.hideLabel]: isMenuShrunk,
          })}
          variant="body2"
        >
          {menuItem.label}
        </Typography>
      </button>
      {menuItem.children && (
        <Popper
          className={classes.popper}
          open={open}
          anchorEl={anchor.current}
          transition
          placement="right-start"
        >
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Paper className={classes.paper}>
              {menuItem.children.map((subMenuItem) => {
                const linkProps = subMenuItem.external
                  ? { href: subMenuItem.url, target: "_blank" }
                  : {};

                return (
                  <Typography
                    aria-label={subMenuItem.ariaLabel}
                    component={subMenuItem.external ? "a" : "button"}
                    className={clsx(classes.label, classes.subMenuLabel)}
                    key={subMenuItem.url}
                    onClick={(event: React.MouseEvent<any>) =>
                      handleClick(event, subMenuItem)
                    }
                    data-test="submenu-item-label"
                    data-test-id={subMenuItem.id}
                    variant="body2"
                    {...linkProps}
                  >
                    {subMenuItem.label}
                  </Typography>
                );
              })}
            </Paper>
          </ClickAwayListener>
        </Popper>
      )}
    </div>
  );
};

MenuItem.displayName = "MenuItem";
