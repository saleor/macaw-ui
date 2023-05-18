import { Unstyled } from "@storybook/blocks";
import { Box } from "~/components";
import { useTheme } from "~/theme";

export const ShadowPresentation = () => {
  const { themeValues: vars } = useTheme();

  return (
    <Unstyled>
      <Box
        paddingY="s7"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        rowGap="s10"
        columnGap="s7"
      >
        {Object.entries(vars.boxShadow).map(([key, entry]) => (
          <Box
            key={key}
            paddingBottom="s7"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            __flexBasis="30%"
          >
            <Box width="100%">{key}</Box>
            <Box __fontSize="14px" __minWidth="100px">
              {entry}
            </Box>
            <Box
              __boxShadow={entry}
              borderColor="neutralDefault"
              borderWidth={1}
              borderStyle="solid"
              backgroundColor="transparent"
              width="100%"
              height="s7"
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
