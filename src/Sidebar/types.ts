import React from "react";

export type SidebarMenuItemType = "header" | "button";

export interface SidebarMenuItemHeader {
  label: string;
  id: string;
  header: true;
}

export interface SidebarMenuItemButton {
  label: string;
  id: string;
  ariaLabel: string;
  children?: SidebarMenuItem<SidebarMenuItemType>[];
  iconSrc?: string;
  url?: string;
  external?: boolean;
  header?: false;
}

export type SidebarMenuItem<T extends SidebarMenuItemType> = T extends "header"
  ? SidebarMenuItemHeader
  : SidebarMenuItemButton;

export interface BaseSidebarProps {
  className?: string;
  menuItems: SidebarMenuItemButton[];
  toolbar?: React.ReactNode;
  onMenuItemClick: (url: string) => void;
}
