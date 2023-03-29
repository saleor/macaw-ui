import { Box } from "~/components";

import { vars } from "../contract.css";

export default {
  title: "Space",
};

export const Default = () => (
  <Box>
    {Object.entries(vars.space).map(([key, entry]) => (
      <Box key={key} display="flex" gap={4} alignItems="center">
        <Box backgroundColor="highlightDim" __width={entry} height={10} />
        <Box as="pre">{key}</Box>
      </Box>
    ))}
  </Box>
);
