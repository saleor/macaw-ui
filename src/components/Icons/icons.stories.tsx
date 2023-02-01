import { Text } from "~/components/Text";
import { Box } from "~/components/Box";
import * as icons from "./index";

const macawIcons = Object.values(icons);
const sizes = ["xsmall", "small", "medium", "large"] as const;

export default {
  title: "components/Icons",
};

export const Default = () =>
  sizes.map((size) => (
    <Box marginTop={5} key={size}>
      <Text as="h3" variant="title">
        {size}
      </Text>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        gap={5}
      >
        {macawIcons.map((Icon, idx) => (
          <Box margin={3} key={idx} display="flex" flexDirection="column">
            <Icon size={size} color="iconNeutralDefault" />
            <Text>{Icon.displayName}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  ));
