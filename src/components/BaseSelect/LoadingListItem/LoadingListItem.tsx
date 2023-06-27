import { ReactNode } from "react";
import { List, Text } from "~/components";

import { listItemStyle } from "../BaseSelect.css";
import { Spinner } from "./Spinner";

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
    color="textNeutralSubdued"
  >
    <Text size={size} color="textNeutralSubdued">
      {children}
    </Text>
    <Spinner />
  </List.Item>
);
