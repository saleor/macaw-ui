export interface IMenuItem {
  ariaLabel: string;
  children?: IMenuItem[];
  icon?: any;
  label: string;
  url?: string;
}

export interface IActiveSubMenu {
  isActive: boolean;
  label: string | null;
}
