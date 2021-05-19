import { ThemeType } from "../theme";

export enum ExtensionMessageType {
  BREADCRUMB_CLICK,
  BREADCRUMB_SET,
  THEME,
}
export interface BaseExtensionMessageData {
  type: ExtensionMessageType;
}

export type Breadcrumb = Record<"label" | "value", string>;
export interface BreadcrumbClickMessage extends BaseExtensionMessageData {
  breadcrumb: string;
}
export interface BreadcrumbChangeMessage extends BaseExtensionMessageData {
  breadcrumbs: Breadcrumb[];
}

export interface ThemeChangeMessage extends BaseExtensionMessageData {
  theme: ThemeType;
}

export interface ExtensionMessageEvent<T extends BaseExtensionMessageData> {
  data: T;
}
