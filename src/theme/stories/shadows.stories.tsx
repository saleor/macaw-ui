import { Box } from "~/components";

import { vars } from "../contract.css";

export default {
  title: "Shadows",
};

export const Default = () => (
  <Box>
    {Object.entries(vars.boxShadow).map(([key, entry]) => (
      <Box key={key} display="flex" gap={4} alignItems="center">
        <Box width={10} height={10} __boxShadow={entry} borderRadius={3} />
        <Box as="pre">{key}</Box>
      </Box>
    ))}
  </Box>
);
