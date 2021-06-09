import React from "react";

export interface IMenuItem {
  ariaLabel: string;
  children?: IMenuItem[];
  iconSrc?: string;
  label: string;
  id: string;
  url?: string;
  external?: boolean;
}

export interface BaseSidebarProps {
  className?: string;
  menuItems: IMenuItem[];
  toolbar?: React.ReactNode;
  onMenuItemClick: (url: string) => void;
}
