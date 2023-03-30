import { Box } from "~/components";

import { vars } from "../contract.css";

export default {
  title: "Colors",
};

export const Background = () => (
  <Box style={{ columnCount: 3 }}>
    {Object.entries(vars.colors.background).map(([key, entry]) => (
      <Box
        key={key}
        display="flex"
        gap={4}
        alignItems="center"
        style={{ breakInside: "avoid" }}
      >
        <Box
          __backgroundColor={entry}
          width={10}
          height={10}
          borderStyle={"solid"}
          borderRadius={3}
          borderColor={"neutralDefault"}
          boxShadow={"overlay"}
        />
        <Box as="pre">{key}</Box>
      </Box>
    ))}
  </Box>
);

export const Foreground = () => (
  <Box style={{ columnCount: 3 }}>
    {Object.entries(vars.colors.foreground).map(([key, entry]) => (
      <Box
        key={key}
        display="flex"
        gap={4}
        alignItems="center"
        style={{ breakInside: "avoid" }}
      >
        <Box
          __backgroundColor={entry}
          width={10}
          height={10}
          borderStyle={"solid"}
          borderRadius={3}
          borderColor={"neutralDefault"}
          boxShadow={"overlay"}
        />
        <Box as="pre">{key}</Box>
      </Box>
    ))}
  </Box>
);

export const Border = () => (
  <Box style={{ columnCount: 3 }}>
    {Object.entries(vars.colors.border).map(([key, entry]) => (
      <Box
        key={key}
        display="flex"
        gap={4}
        alignItems="center"
        style={{ breakInside: "avoid" }}
      >
        <Box
          __backgroundColor={entry}
          width={10}
          height={10}
          borderStyle={"solid"}
          borderRadius={3}
          borderColor={"neutralDefault"}
          boxShadow={"overlay"}
        />
        <Box as="pre">{key}</Box>
      </Box>
    ))}
  </Box>
);
