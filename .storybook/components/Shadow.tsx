import { Box, Text } from "~/components";
import { useTheme } from "~/theme";
import { Unstyled } from "@storybook/blocks";

export const ShadowPresentation = () => {
  const { themeValues: vars } = useTheme();

  return (
    <Unstyled>
      <Box
        paddingY={10}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        rowGap={13}
        columnGap={10}
      >
        {Object.entries(vars.boxShadow).map(([key, entry]) => (
          <Box
            key={key}
            paddingBottom={10}
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            __flexBasis="30%"
          >
            <Box width="100%">{key}</Box>
            <Text variant="caption" __minWidth="100px">
              {entry}
            </Text>
            <Box
              __boxShadow={entry}
              borderColor="neutralDefault"
              borderWidth={1}
              borderStyle="solid"
              backgroundColor="transparent"
              width="100%"
              height={10}
              display="flex"
              justifyContent="center"
              alignItems="center"
            />
          </Box>
        ))}
      </Box>
    </Unstyled>
  );
};
