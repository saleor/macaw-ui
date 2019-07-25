import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import LinearProgress from "@material-ui/core/LinearProgress";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";
import SVG from "react-inlinesvg";

import Container from "../Container";
import useAppLayout from "../hooks/useAppLayout";
import ArrowDropdown from "../icons/ArrowDropdown";
import ArrowMenuBack from "../icons/ArrowMenuBack";
import { appLoaderHeight, drawerWidth, drawerWidthExpanded } from "./consts";
import MenuList from "./MenuList";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { IMenuItem } from "./types";

const useStyles = makeStyles((theme: Theme) => ({
  appAction: {
    bottom: 0,
    gridColumn: 2,
    position: "sticky",
    zIndex: 1
  },
  appLoader: {
    height: appLoaderHeight,
    zIndex: 1201
  },
  arrow: {
    marginLeft: theme.spacing.unit * 2,
    transition: theme.transitions.duration.standard + "ms"
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0
    },
    paddingLeft: drawerWidthExpanded,
    transition: "padding-left 0.5s ease",
    width: "100%"
  },
  contentToggle: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0
    },
    paddingLeft: drawerWidth
  },
  darkThemeSwitch: {
    marginRight: theme.spacing.unit * 2
  },
  header: {
    display: "flex",
    height: 40,
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2
  },
  hide: {
    opacity: 0
  },
  logo: {
    "& svg": {
      height: "100%",
      margin: "20px 50px"
    },
    background: theme.palette.secondary.main,
    display: "block",
    height: 80
  },
  logoSmall: {
    "& svg": {
      margin: "0px 25px"
    }
  },
  menu: {
    background: theme.palette.background.paper,
    height: "100vh",
    padding: 25
  },
  menuArrow: {
    "& path": {
      fill: theme.palette.primary.main
    },
    "& span": {
      margin: "0 8px"
    },
    "& svg": {
      transform: "rotate(180deg)"
    },
    "&:hover": {
      background: "#E6F3F3"
    },
    alignItems: "center",
    background: theme.palette.background.paper,
    border: `solid 1px #EAEAEA`,
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    height: 32,
    justifyContent: "center",
    position: "absolute",
    right: -16,
    top: 65,
    transition: `background ${theme.transitions.duration.shorter}ms`,
    width: 32,
    zIndex: 99
  },
  menuArrowShrink: {
    "& svg": {
      transform: "rotate(0deg)"
    }
  },
  menuIcon: {
    "& span": {
      "&:nth-child(1)": {
        top: 15
      },
      "&:nth-child(2), &:nth-child(3)": {
        top: 20
      },
      "&:nth-child(4)": {
        top: 25
      },
      background: theme.palette.secondary.light,
      display: "block",
      height: 1,
      left: "20%",
      opacity: 1,
      position: "absolute",
      transform: "rotate(0deg)",
      transition: ".25s ease-in-out",
      width: "60%"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    background: theme.palette.background.paper,
    borderRadius: "50%",
    cursor: "pointer",
    height: 42,
    left: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    position: "relative",
    transform: "rotate(0deg)",
    transition: `${theme.transitions.duration.shorter}ms ease-in-out`,
    width: 42
  },
  menuIconDark: {
    "& span": {
      background: theme.palette.common.white
    }
  },
  menuIconOpen: {
    "& span": {
      "&:nth-child(1), &:nth-child(4)": {
        left: "50%",
        top: 20,
        width: 0
      },
      "&:nth-child(2)": {
        transform: "rotate(45deg)"
      },
      "&:nth-child(3)": {
        transform: "rotate(-45deg)"
      }
    },
    left: 280,
    position: "absolute",
    zIndex: 1999
  },
  menuSmall: {
    background: theme.palette.background.paper,
    height: "100vh",
    padding: 25
  },
  popover: {
    zIndex: 1
  },
  root: {
    width: `100%`
  },
  rotate: {
    transform: "rotate(180deg)"
  },
  sideBar: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
    background: theme.palette.background.paper,
    padding: `0 ${theme.spacing.unit * 4}px`
  },
  spacer: {
    flex: 1
  },
  userBar: {
    alignItems: "center",
    display: "flex"
  },
  userChip: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  userMenuContainer: {
    position: "relative"
  },
  view: {
    backgroundColor: theme.palette.background.default,
    flex: 1,
    flexGrow: 1,
    marginLeft: 0,
    paddingBottom: theme.spacing.unit,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 3
    }
  }
}));

export interface AppLayoutUser {
  avatar: string;
  name: string;
}
export interface AppLayoutProps {
  children: React.ReactNode;
  createHref: (relativeUrl: string) => string;
  isMenuActive: (menuItem: IMenuItem) => boolean;
  logoSrc: string;
  menuStructure: IMenuItem[];
  user: AppLayoutUser;
  userBar: React.ReactNode | React.ReactNodeArray;
  userMenu: React.ReactNode | React.ReactNodeArray;
  onMenuItemClick: (url: string) => void;
}

const AppLayout: React.FC<AppLayoutProps> = props => {
  const {
    children,
    createHref,
    isMenuActive,
    logoSrc,
    menuStructure,
    user,
    userBar,
    userMenu,
    onMenuItemClick
  } = props;
  const classes = useStyles(props);
  const [isMobileMenuOpened, setMobileMenuOpenState] = React.useState(false);
  const [isInnerMenuOpened, setInnerMenuOpenState] = React.useState(false);
  const anchor = React.useRef<HTMLDivElement>();
  const { action, header, menu, progress } = useAppLayout();

  const handleMenuItemClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();

    setMobileMenuOpenState(!isMobileMenuOpened);
    onMenuItemClick(url);
  };

  const toggleMenuShrink = () => menu.setExpansionState(!menu.isExpanded);

  return (
    <>
      <LinearProgress
        className={classNames(classes.appLoader, {
          [classes.hide]: !progress.isActive
        })}
        color="primary"
      />
      <div className={classes.root}>
        <div className={classes.sideBar}>
          <ResponsiveDrawer
            onClose={() => setMobileMenuOpenState(false)}
            open={isMobileMenuOpened}
            expanded={menu.isExpanded}
          >
            <div
              className={classNames(classes.logo, {
                [classes.logoSmall]: !menu.isExpanded
              })}
            >
              <SVG src={logoSrc} />
            </div>
            <Hidden smDown>
              <div
                className={classNames(classes.menuArrow, {
                  [classes.menuArrowShrink]: menu.isExpanded
                })}
                onClick={toggleMenuShrink}
              >
                <ArrowMenuBack />
              </div>
            </Hidden>
            <MenuList
              className={menu.isExpanded ? classes.menu : classes.menuSmall}
              createHref={createHref}
              menuItems={menuStructure}
              isMenuActive={isMenuActive}
              isMenuSmall={menu.isExpanded}
              onMenuItemClick={handleMenuItemClick}
            />
          </ResponsiveDrawer>
        </div>
        <div
          className={classNames(classes.content, {
            [classes.contentToggle]: !menu.isExpanded
          })}
        >
          <div>
            <Container>
              <div className={classes.header}>
                <div
                  className={classNames(classes.menuIcon, {
                    [classes.menuIconOpen]: isMobileMenuOpened
                  })}
                  onClick={() => setMobileMenuOpenState(!isMobileMenuOpened)}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div ref={header} />
                <div className={classes.spacer} />
                <div className={classes.userBar}>
                  {userBar}
                  <div className={classes.userMenuContainer} ref={anchor}>
                    <Chip
                      avatar={<Avatar alt="user" src={user.avatar} />}
                      className={classes.userChip}
                      label={
                        <>
                          {user.name}
                          <ArrowDropdown
                            className={classNames(classes.arrow, {
                              [classes.rotate]: isInnerMenuOpened
                            })}
                          />
                        </>
                      }
                      onClick={() => setInnerMenuOpenState(!isInnerMenuOpened)}
                    />
                    <Popper
                      className={classes.popover}
                      open={isInnerMenuOpened}
                      anchorEl={anchor.current}
                      transition
                      disablePortal
                      placement="bottom-end"
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "right top"
                                : "right bottom"
                          }}
                        >
                          <Paper>
                            <ClickAwayListener
                              onClickAway={() => setInnerMenuOpenState(false)}
                              mouseEvent="onClick"
                            >
                              <Menu>{userMenu}</Menu>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <main className={classes.view}>{children}</main>
          <div className={classes.appAction} ref={action} />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
