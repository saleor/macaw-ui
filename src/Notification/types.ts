import type { ReactNode } from "react";

export type NotificationType = "info" | "success" | "error" | "warning";
export interface NotificationAction {
  label: string;
  onClick: () => void;
}
export interface NotificationData {
  content?: ReactNode;
  title: string;
  action?: NotificationAction;
  type: NotificationType;
}

export interface NotificationProps extends NotificationData {
  className?: string;
  onClose: () => void;
}
