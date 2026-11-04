import { Box } from "@saleor/macaw-ui";
import type { ReactNode } from "react";

export const Section = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => (
  <Box as="section" aria-label={name} display="flex" gap={2} padding={2}>
    {children}
  </Box>
);
