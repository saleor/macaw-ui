import { Unstyled } from "@storybook/blocks";
import { Box } from "~/components";
import { useTheme } from "~/theme";

export const ShadowPresentation = () => {
  const { themeValues: vars } = useTheme();

  return (
    <Unstyled>
      <Box
        paddingY={7}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        rowGap={10}
        columnGap={7}
      >
        {Object.entries(vars.boxShadow).map(([key, entry]) => (
          <Box
            key={key}
            paddingBottom={7}
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
              height={7}
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
