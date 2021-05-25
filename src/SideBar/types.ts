export interface IMenuItem {
  ariaLabel: string;
  children?: IMenuItem[];
  iconSrc?: string;
  label: string;
  id: string;
  url?: string;
}

export interface SideBarProps {
  className?: string;
  menuItems: IMenuItem[];
  onMenuItemClick: (url: string) => void;
}
