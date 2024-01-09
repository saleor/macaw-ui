import { Children, ReactNode, isValidElement } from "react";
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

export const hasNoOptions = (children: ReactNode): boolean => {
  let hasNoOptions = false;

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === NoOptions) {
      hasNoOptions = true;
    }
  });

  return hasNoOptions;
};
