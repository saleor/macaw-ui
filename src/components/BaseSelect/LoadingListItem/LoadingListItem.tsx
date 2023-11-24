import { ReactNode } from "react";
import { List, Spinner, Text } from "~/components";

import { listItemStyle } from "../BaseSelect.css";

type LoadingListItemProps = {
  size?: "small" | "medium" | "large";
  children?: ReactNode;
};

export const LoadingListItem = ({
  size = "medium",
  children,
}: LoadingListItemProps) => (
  <List.Item
    className={listItemStyle}
    display="flex"
    gap={1.5}
    color="default2"
  >
    <Text size={size} color="default2">
      {children}
    </Text>
    <Spinner />
  </List.Item>
);
