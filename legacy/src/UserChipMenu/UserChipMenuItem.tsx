import MenuItem, { MenuItemProps } from "@material-ui/core/MenuItem";
import React from "react";

import { useUserChipMenu } from "./context";

export interface UserChipMenuItemProps extends Omit<MenuItemProps, "button"> {
  leaveOpen?: boolean;
}

export const UserChipMenuItem: React.FC<UserChipMenuItemProps> = ({
  leaveOpen,
  onClick,
  ...props
}) => {
  const closeMenu = useUserChipMenu();

  // We're not really interested in event type here
  const handleClickWithClose = (event: unknown) => {
    closeMenu();
    if (onClick) {
      onClick(event as any);
    }
  };

  return (
    <MenuItem
      {...props}
      onClick={leaveOpen ? onClick : handleClickWithClose}
      button
    />
  );
};
UserChipMenuItem.displayName = "UserChipMenuItem";
