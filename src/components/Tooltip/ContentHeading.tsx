import { ReactNode } from "react";
import { Text } from "../Text";

interface ContentHeadingProps {
  children: ReactNode;
}

export const ContentHeading = ({ children }: ContentHeadingProps) => {
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
