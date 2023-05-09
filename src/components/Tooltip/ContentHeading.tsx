import { ReactNode } from "react";
import { Text } from "../Text";

export interface TooltipContentHeadingProps {
  children: ReactNode;
}

export const ContentHeading = ({ children }: TooltipContentHeadingProps) => {
  return (
    <Text
      display="block"
      variant="caption"
      color="textNeutralSubdued"
      marginBottom={2}
    >
      {children}
    </Text>
  );
};

ContentHeading.displayName = "Tooltip.ContentHeading";
