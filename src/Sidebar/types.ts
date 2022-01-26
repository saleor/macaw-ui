import React from "react";

export interface SidebarMenuItem {
  label: string;
  id: string;
  ariaLabel?: string;
  children?: SidebarMenuItem[];
  iconSrc?: string;
  url?: string;
  external?: boolean;
}

export interface BaseSidebarProps {
  className?: string;
  menuItems: SidebarMenuItem[];
  toolbar?: React.ReactNode;
  onMenuItemClick: (url: string) => void;
}
