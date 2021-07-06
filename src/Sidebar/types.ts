import React from "react";

export interface SidebarMenuItem {
  ariaLabel: string;
  children?: SidebarMenuItem[];
  iconSrc?: string;
  label: string;
  id: string;
  url?: string;
  external?: boolean;
}

export interface BaseSidebarProps {
  className?: string;
  menuItems: SidebarMenuItem[];
  toolbar?: React.ReactNode;
  onMenuItemClick: (url: string) => void;
}
