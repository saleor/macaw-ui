import type { ReactNode } from "react";

export type NotificationType = "info" | "success" | "error" | "warning";
export interface NotificationAction {
  label: string;
  onClick: () => void;
}

export type ApiMessageData = {
  apiMessageContent: ReactNode;
  showApiLabel: ReactNode;
  hideApiLabel: ReactNode;
};

export interface NotificationData {
  content?: ReactNode;
  title: string;
  action?: NotificationAction;
  type: NotificationType;
  apiMessage?: ApiMessageData;
}

export interface NotificationProps extends NotificationData {
  className?: string;
  onClose: () => void;
}
