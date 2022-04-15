import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import SVG from "react-inlinesvg";

import { Logo } from "../icons/Logo";
import { LogoDark } from "../icons/LogoDark";
import { BaseSidebarProps, SidebarMenuItem } from "../Sidebar/types";
import { SquareButton } from "../SquareButton";
import { useTheme } from "../theme";
import { MenuItemBtn } from "./MenuItemBtn";
import useStyles from "./styles";

export type SideBarDrawerProps = BaseSidebarProps;

export const SidebarDrawer: React.FC<SideBarDrawerProps> = ({
  menuItems,
  onMenuItemClick,
  linkComponent,
  logoHref,
}) => {
  const [isOpened, setOpened] = React.useState(false);
  const classes = useStyles({});
  const [activeMenu, setActiveMenu] = React.useState<SidebarMenuItem | null>(
    null
  );
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);
  const { themeType } = useTheme();

  const handleMenuItemClick = (menuItem: SidebarMenuItem) => {
    setOpened(false);
    setShowSubmenu(false);
    onMenuItemClick(menuItem);
  };

  const handleMenuItemWithChildrenClick = (menuItem: SidebarMenuItem) => {
    setActiveMenu(menuItem);
    setShowSubmenu(true);
    container.current?.scrollTo({
      top: 0,
    });
  };

  const Link = linkComponent ?? "a";

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
              <Link href={logoHref} className={classes.logo}>
                {themeType === "dark" ? <LogoDark /> : <Logo />}
              </Link>
              {menuItems.map((menuItem) => (
                <MenuItemBtn
                  menuItem={menuItem}
                  onClick={
                    menuItem.children
                      ? () => handleMenuItemWithChildrenClick(menuItem)
                      : handleMenuItemClick
                  }
                  linkComponent={linkComponent}
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
                {activeMenu.children?.map((subMenuItem) => {
                  if (subMenuItem.url || subMenuItem.children) {
                    return (
                      <MenuItemBtn
                        menuItem={subMenuItem}
                        onClick={handleMenuItemClick}
                        key={subMenuItem.ariaLabel}
                        linkComponent={linkComponent}
                      />
                    );
                  }

                  return (
                    <Typography
                      variant="caption"
                      className={classes.subMenuHeader}
                    >
                      {subMenuItem.label}
                    </Typography>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};

SidebarDrawer.displayName = "SideBarDrawer";
