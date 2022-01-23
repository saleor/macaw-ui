import homeIcon from "../../stories/assets/menu-home-icon.svg";
import { SidebarMenuItem } from "./types";

export const menu: SidebarMenuItem[] = [
  {
    ariaLabel: "Menu 1",
    id: "menu1",
    label: "Menu 1",
    iconSrc: homeIcon,
    url: "/section1/",
  },
  {
    ariaLabel: "Menu 2",
    id: "menu2",
    label: "Menu 2",
    iconSrc: homeIcon,
    children: [
      {
        ariaLabel: "Menu 2.1",
        id: "menu21",
        label: "Menu 21",
        url: "/section21/",
      },
      {
        ariaLabel: "Menu 2.2",
        id: "menu22",
        label: "Menu 22",
        url: "/section22/",
      },
      {
        ariaLabel: "Menu 2.3",
        id: "menu23",
        label: "Menu 23",
        url: "/section23/",
      },
      {
        label: "External",
        id: "menu2external",
      },
      {
        ariaLabel: "Menu 2.4",
        id: "menu24",
        label: "Menu 24 - external",
        url: "http://example.com",
        external: true,
      },
      {
        ariaLabel: "Menu 2.5",
        id: "menu25",
        label: "Menu 25 - external",
        url: "http://example.com",
        external: true,
      },
    ],
  },
];
