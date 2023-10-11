import { Box, Text, WarningIcon } from ".";

const meta = {
  title: "POC colors",
};

export default meta;

export const WarningAlert = () => {
  return (
    <Box
      backgroundColor="critical"
      padding={3}
      borderRadius={3}
      display="grid"
      __maxWidth="400px"
      borderColor="critical"
      borderWidth={1}
      borderStyle="solid"
    >
      <Box display="flex" gap={2}>
        <WarningIcon color="critical" />
        <Text color="critical" variant="heading">
          Alert header
        </Text>
      </Box>

      <Text color="critical" variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
        metus vitae turpis volutpat, quis fermentum quam feugiat. Aenean sed sem
        eu mi ullamcorper rhoncus. Vivamus eu mauris convallis, porttitor elit
        id, bibendum quam. Nulla egestas mauris eu molestie dictum. In hac
        habitasse platea dictumst. Nunc dignissim libero vitae lectus laoreet,
        non cursus eros euismod. Nullam auctor ligula ut metus viverra rhoncus.
        Suspendisse pellentesque magna ac massa posuere dignissim. Maecenas sed
        odio turpis. Curabitur vitae accumsan mauris. Cras ex sapien,
        ullamcorper vitae cursus sed, lobortis a mauris. Aliquam vel ligula vel
        sapien interdum sollicitudin.
      </Text>
    </Box>
  );
};

export const Card = () => {
  return (
    <Box
      backgroundColor="default"
      padding={3}
      borderRadius={3}
      display="grid"
      __maxWidth="400px"
      borderColor="default"
      borderWidth={1}
      borderStyle="solid"
      boxShadow="overlay"
    >
      <Text color="strong" variant="heading">
        Strong card header
      </Text>

      <Text color="muted" variant="caption">
        Muted caption text
      </Text>
      <Text color="disabled" variant="body">
        Disabled body text
      </Text>

      <Box
        as="input"
        borderColor={{
          default: "default",
          hover: "defaultHover",
          focus: "defaultFocus",
        }}
        borderWidth={1}
        borderStyle="solid"
        fontSize="bodyLarge"
        padding={3}
        borderRadius={3}
        outlineStyle="none"
        color="default"
        placeholder="Input field"
      />
    </Box>
  );
};
