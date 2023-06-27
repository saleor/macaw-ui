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
      marginBottom={0.5}
      data-macaw-ui-component="Tooltip.ContentHeading"
    >
      {children}
    </Text>
  );
};

ContentHeading.displayName = "Tooltip.ContentHeading";
