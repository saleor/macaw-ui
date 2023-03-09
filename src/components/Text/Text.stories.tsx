import { ComponentMeta } from "@storybook/react";

import { Text } from "./Text";
import { Box } from "../Box";

export default {
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default = () => {
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Box as="pre" paddingBottom={2} borderBottomStyle="solid">
        Medium
      </Box>
      <Text variant="hero" size="medium">
        Best eCommerce Platform
      </Text>
      <Text variant="title" size="medium">
        Dashboard
      </Text>
      <Text variant="heading" size="medium">
        Product Details
      </Text>
      <Text variant="bodyStrong" size="medium">
        Sapien parturient in fringilla.
      </Text>

      <Text variant="bodyEmp" size="medium">
        Sapien parturient in fringilla.
      </Text>

      <Text variant="body" size="medium">
        Sapien parturient in fringilla ac facilisis nunc adipiscing viverra. Non
        semper rutrum augue sed leo felis pretium sed.
      </Text>

      <Text variant="button" size="medium">
        Edit element
      </Text>

      <Text variant="caption" size="medium">
        Name and label
      </Text>
    </Box>
  );
};
