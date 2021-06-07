import Typography from "@material-ui/core/Typography";
import React from "react";
import SVG from "react-inlinesvg";

import { IMenuItem } from "../Sidebar/types";
import useStyles from "./styles";

export interface MenuItemBtnProps {
  menuItem: IMenuItem;
  onClick: (url: string) => void;
}
export const MenuItemBtn: React.FC<MenuItemBtnProps> = ({
  menuItem,
  onClick,
}) => {
  const classes = useStyles({});

  return (
    <button
      className={classes.menuItemBtn}
      data-test="menu-item-label"
      data-test-id={menuItem.id}
      onClick={() => onClick(menuItem.url!)}
    >
      {menuItem.iconSrc && (
        <SVG className={classes.icon} src={menuItem.iconSrc} />
      )}
      <Typography aria-label={menuItem.ariaLabel} className={classes.label}>
        {menuItem.label}
      </Typography>
    </button>
  );
};

MenuItemBtn.displayName = "MenuItemBtn";
