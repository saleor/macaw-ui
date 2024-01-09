import { ReactNode } from "react";
import { Text } from "~/components";

interface NoOptionsProps {
  children: ReactNode;
}

export const NoOptions = ({ children }: NoOptionsProps) => {
  return (
    <Text as="p" padding={2} textAlign="center" fontStyle="italic">
      {children}
    </Text>
  );
};
