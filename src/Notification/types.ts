export type NotificationType = "info" | "success" | "error" | "warning";
export interface Notification {
  content?: string;
  title: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  type: NotificationType;
}

export interface NotificationProps extends Notification {
  onClose: () => void;
}
