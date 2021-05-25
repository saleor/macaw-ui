import { Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import SVG from "react-inlinesvg";

import { Logo } from "../icons/Logo";
import { IMenuItem, SideBarProps } from "../SideBar/types";
import { SquareButton } from "../SquareButton";
import { MenuItemBtn } from "./MenuItemBtn";
import useStyles from "./styles";

export type SideBarDrawerProps = SideBarProps;

export const SideBarDrawer: React.FC<SideBarDrawerProps> = ({
  menuItems,
  onMenuItemClick,
}) => {
  const [isOpened, setOpened] = React.useState(false);
  const classes = useStyles({});
  const [activeMenu, setActiveMenu] = React.useState<IMenuItem | null>(null);
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (url: string) => {
    setOpened(false);
    setShowSubmenu(false);
    onMenuItemClick(url);
  };

  const handleMenuItemWithChildrenClick = (menuItem: IMenuItem) => {
    setActiveMenu(menuItem);
    setShowSubmenu(true);
    container.current?.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <SquareButton onClick={() => setOpened(true)}>
        <MenuIcon />
      </SquareButton>
      <Drawer
        classes={{
          paper: classes.root,
        }}
        open={isOpened}
        onClose={() => setOpened(false)}
      >
        <div
          className={clsx(classes.container, {
            [classes.containerSubMenu]: showSubmenu,
          })}
          ref={container}
        >
          <div
            className={clsx(classes.innerContainer, {
              [classes.secondaryContentActive]: showSubmenu,
            })}
          >
            <div className={classes.content}>
              <div className={classes.logo}>
                <Logo />
              </div>
              {menuItems.map((menuItem) => (
                <MenuItemBtn
                  menuItem={menuItem}
                  onClick={
                    menuItem.children
                      ? () => handleMenuItemWithChildrenClick(menuItem)
                      : handleMenuItemClick
                  }
                  key={menuItem.ariaLabel}
                />
              ))}
            </div>
            {activeMenu && (
              <div className={classes.content}>
                <div className={classes.subMenuTopBar}>
                  <div className={classes.activeMenuLabel}>
                    {activeMenu.iconSrc && (
                      <SVG className={classes.icon} src={activeMenu.iconSrc} />
                    )}
                    <Typography className={classes.label}>
                      {activeMenu.label}
                    </Typography>
                  </div>
                  <SquareButton onClick={() => setShowSubmenu(false)}>
                    <ArrowLeftIcon />
                  </SquareButton>
                </div>
                {activeMenu.children?.map((subMenuItem) => (
                  <MenuItemBtn
                    menuItem={subMenuItem}
                    onClick={handleMenuItemClick}
                    key={subMenuItem.ariaLabel}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};

SideBarDrawer.displayName = "SideBarDrawer";
