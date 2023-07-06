import { ReactNode } from "react";

import { Box, Button } from "..";
import { useFilterContext } from "./context";

export const Footer = ({ children }: { children: ReactNode }) => (
  <Box display="flex" justifyContent="space-between" paddingY={4}>
    {children}
  </Box>
);

export const AddRowButton = ({ children }: { children: ReactNode }) => {
  const context = useFilterContext();

  return (
    <Button onClick={() => context.emitter.addRow()} variant="secondary">
      {children}
    </Button>
  );
};

export const ConfirmButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => (
  <Button onClick={onClick} variant="primary">
    {children}
  </Button>
);
