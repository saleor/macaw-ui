import { Box } from "~/components";

import { vars } from "../contract.css";

export default {
  title: "Border Radiuses",
};

export const Default = () => (
  <Box>
    {Object.entries(vars.borderRadius).map(([key, entry]) => (
      <Box key={key} display="flex" gap={4} alignItems="center">
        <Box
          backgroundColor="highlightDim"
          width={10}
          height={10}
          __borderRadius={entry}
        />
        <Box as="pre">{key}</Box>
      </Box>
    ))}
  </Box>
);
