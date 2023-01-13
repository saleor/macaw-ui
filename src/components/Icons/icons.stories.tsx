import { Text } from "~/components/Text";
import { Box } from "~/components/Box";
import * as icons from "./index";

const macawIcons = Object.values(icons);
const sizes = ["small", "medium", "large"] as const;

export default {
  title: "components/Icons",
};

export const Default = () =>
  sizes.map((size) => (
    <>
      <Text as="h3" color="neutralTextPrimary">
        {size}
      </Text>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        {macawIcons.map((Icon, idx) => (
          <Box margin={3} key={idx}>
            <Icon size={size} />
          </Box>
        ))}
      </Box>
      ;
    </>
  ));
