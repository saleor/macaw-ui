import { CustomLinkComponent, SidebarMenuItem } from "./types";

export const getLinkProps = (menuItem: SidebarMenuItem) => {
  if (menuItem.isButton || !menuItem.url) {
    return {};
  }
  if (menuItem.external) {
    return { href: menuItem.url, target: "_blank" };
  }
  return {
    href: menuItem.url,
  };
};

export const getLinkComponent = (
  menuItem: SidebarMenuItem,
  customComponent?: CustomLinkComponent
) => {
  if (menuItem.isButton || !menuItem.url) {
    return "button";
  }
  if (menuItem.external) {
    return "a";
  }
  return customComponent ?? "a";
};
