export interface IMenuItem {
  ariaLabel: string;
  children?: IMenuItem[];
  iconSrc?: string;
  label: string;
  id: string;
  url?: string;
}

export interface LogoSrc {
  dark?: string;
  light: string;
}

export interface SideBarProps {
  logoSrc: LogoSrc;
  className?: string;
  menuItems: IMenuItem[];
  onMenuItemClick: (url: string) => void;
}
