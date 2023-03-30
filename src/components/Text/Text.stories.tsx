import { ComponentMeta } from "@storybook/react";

import { Text } from "./Text";
import { Box } from "../Box";

export default {
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default = () => {
  return (
    <Box display="flex" flexWrap="wrap" gap={5}>
      <Box display="flex" flexDirection="column" gap={5}>
        <Box as="pre" paddingBottom={2} borderBottomStyle="solid">
          Small
        </Box>
        <Text variant="hero" size="small">
          Best eCommerce Platform
        </Text>
        <Text variant="title" size="small">
          Dashboard
        </Text>
        <Text variant="heading" size="small">
          Product Details
        </Text>
        <Text variant="bodyStrong" size="small">
          Sapien parturient in fringilla.
        </Text>

        <Text variant="bodyEmp" size="small">
          Sapien parturient in fringilla.
        </Text>

        <Text variant="body" size="small">
          Sapien parturient in fringilla ac facilisis nunc adipiscing viverra.
          Non semper rutrum augue sed leo felis pretium sed.
        </Text>

        <Text variant="button" size="small">
          Edit element
        </Text>

        <Text variant="caption" size="small">
          Name and label
        </Text>
      </Box>
      <Text variant="hero" size="medium">
        Best eCommerce Platform
      </Text>
      <Text>Dashboard</Text>
      <Text variant="heading" size="medium">
        Product Details
      </Text>
      <Text variant="bodyStrong" size="medium">
        Sapien parturient in fringilla.
      </Text>

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
          Sapien parturient in fringilla ac facilisis nunc adipiscing viverra.
          Non semper rutrum augue sed leo felis pretium sed.
        </Text>

        <Text variant="button" size="medium">
          Edit element
        </Text>

        <Text variant="caption" size="medium">
          Name and label
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" gap={5}>
        <Box as="pre" paddingBottom={2} borderBottomStyle="solid">
          Large
        </Box>
        <Text variant="hero" size="large">
          Best eCommerce Platform
        </Text>
        <Text variant="title" size="large">
          Dashboard
        </Text>
        <Text variant="heading" size="large">
          Product Details
        </Text>
        <Text variant="bodyStrong" size="large">
          Sapien parturient in fringilla.
        </Text>

        <Text variant="bodyEmp" size="large">
          Sapien parturient in fringilla.
        </Text>

        <Text variant="body" size="large">
          Sapien parturient in fringilla ac facilisis nunc adipiscing viverra.
          Non semper rutrum augue sed leo felis pretium sed.
        </Text>

        <Text variant="button" size="large">
          Edit element
        </Text>

        <Text variant="caption" size="large">
          Name and label
        </Text>
      </Box>
    </Box>
  );
};
