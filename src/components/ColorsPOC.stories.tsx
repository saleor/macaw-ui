import { Box, HomeIcon, InfoIcon, ProductsIcons, Text, WarningIcon } from ".";

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
        <WarningIcon iconColor="critical" />
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
        boxShadow={{
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

      <Box as="ul">
        <Box
          as="li"
          backgroundColor={{
            default: "default",
            hover: "muted",
          }}
          cursor="pointer"
          paddingY={3}
          paddingX={1}
        >
          <Text color="default">List item 1</Text>
        </Box>
        <Box
          as="li"
          backgroundColor={{
            default: "default",
            hover: "muted",
          }}
          cursor="pointer"
          paddingY={3}
          paddingX={1}
        >
          <Text color="default">List item 2</Text>
        </Box>
      </Box>

      <Box
        as="button"
        backgroundColor="inverted"
        borderWidth={0}
        padding={3}
        borderRadius={2}
        cursor="pointer"
      >
        <Text color="inverted">Click me</Text>
      </Box>
    </Box>
  );
};

export const Layout = () => {
  return (
    <Box
      __maxWidth="800px"
      display="grid"
      __gridTemplateColumns="1fr 2fr"
      gap={5}
      borderColor="default"
      borderStyle="solid"
      __height="300px"
    >
      <Box backgroundColor="muted" padding={3}>
        <Box as="ul" padding={0} margin={0}>
          <Box
            as="li"
            backgroundColor={{
              default: "muted",
              hover: "strong",
            }}
            cursor="pointer"
            paddingX={4}
          >
            <Text color="default" variant="bodyEmp">
              Home
            </Text>
          </Box>
          <Box
            as="li"
            backgroundColor={{
              default: "muted",
              hover: "strong",
            }}
            cursor="pointer"
            paddingX={4}
          >
            <Text color="default" variant="bodyEmp">
              Product
            </Text>
          </Box>
        </Box>
        <Box
          as="button"
          backgroundColor="default"
          borderWidth={1}
          padding={3}
          borderColor="default"
          borderStyle="solid"
          borderRadius={2}
          cursor="pointer"
          boxShadow="overlay"
        >
          Secondary
        </Box>
      </Box>
      <Box display="grid" __placeItems="center" paddingRight={5}>
        <Box
          backgroundColor="info"
          padding={3}
          borderRadius={3}
          display="grid"
          __width="300px"
          borderColor="info"
          borderWidth={1}
          borderStyle="solid"
          boxShadow="overlay"
        >
          <Box display="flex" gap={2}>
            <InfoIcon iconColor="info" />
            <Text color="info" variant="heading">
              Info header
            </Text>
          </Box>

          <Text color="info" variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eleifend metus vitae turpis volutpat, quis fermentum quam feugiat.
            Aenean sed sem eu mi ullamcorper rhoncus.
          </Text>
        </Box>

        <Box
          as="button"
          backgroundColor="critical"
          borderWidth={1}
          padding={3}
          borderColor="critical"
          borderStyle="solid"
          borderRadius={2}
          cursor="pointer"
          boxShadow={{
            default: "default",
            hover: "defaultHover",
            focus: "defaultFocus",
          }}
        >
          <Text color="critical">Secondary</Text>
        </Box>
      </Box>
    </Box>
  );
};

export const Dashboard = () => {
  return (
    <Box
      display="grid"
      __gridTemplateColumns="1fr 2fr"
      gap={5}
      borderColor="default"
      borderStyle="solid"
      __height="300px"
      __width="100vh"
    >
      <Box backgroundColor="muted" padding={3}>
        <Text variant="heading">Dashboard</Text>
        <Box as="ul" padding={0} margin={0} gap="px" display="grid">
          <Box
            as="li"
            backgroundColor={{
              default: "muted",
              hover: "strong",
            }}
            cursor="pointer"
            display="flex"
            gap={1}
          >
            <HomeIcon iconColor="default" />
            <Text color="default" variant="bodyEmp">
              Home
            </Text>
          </Box>
          <Box
            as="li"
            backgroundColor={{
              default: "strong",
              hover: "strong",
            }}
            cursor="pointer"
            display="flex"
            gap={1}
          >
            <ProductsIcons iconColor="default" />
            <Text color="default" variant="bodyEmp">
              Product
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        paddingRight={4}
        paddingTop={3}
        gap={4}
      >
        <Text variant="heading" color="strong">
          Product detail
        </Text>
        <Box display="grid" gap={2}>
          <Box
            as="input"
            placeholder="Name"
            padding={2}
            borderColor={{
              default: "default",
              hover: "defaultHover",
              focus: "defaultFocus",
            }}
            borderWidth={1}
            borderStyle="solid"
            borderRadius={3}
            outlineStyle="none"
            color="default"
          />
          <Box
            as="input"
            placeholder="Price"
            padding={2}
            type="number"
            borderColor={{
              default: "default",
              hover: "defaultHover",
              focus: "defaultFocus",
            }}
            borderWidth={1}
            borderStyle="solid"
            borderRadius={3}
            outlineStyle="none"
            color="default"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box
            as="button"
            backgroundColor="critical"
            borderWidth={1}
            borderColor="critical"
            borderStyle="solid"
            borderRadius={2}
            cursor="pointer"
          >
            <Text color="critical">Delete</Text>
          </Box>
          <Box display="flex" gap={1}>
            <Box
              as="button"
              backgroundColor="default"
              borderWidth={1}
              borderColor="default"
              borderStyle="solid"
              borderRadius={2}
              cursor="pointer"
            >
              <Text color="default">Back</Text>
            </Box>
            <Box
              as="button"
              backgroundColor="inverted"
              borderWidth={0}
              borderRadius={2}
              cursor="pointer"
            >
              <Text color="inverted">Save</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
