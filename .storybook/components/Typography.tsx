import { Unstyled } from "@storybook/blocks";
import { Box, Text } from "~/components";
import { useTheme } from "~/theme";

export const TypographyPresentation = () => {
  const { themeValues: vars } = useTheme();

  return (
    <Unstyled>
      <Box display="flex" flexDirection="row" flexWrap="wrap" rowGap={7}>
        {Object.entries(vars.fontSize)
          .sort(([_aKey, aValue], [_bKey, bValue]) =>
            aValue.localeCompare(bValue, undefined, { numeric: true })
          )
          .map(([key, value]) => {
            return (
              <Box width="100%" key={key}>
                <Box __fontSize="14px" __minWidth="100px">
                  <Box
                    display="inline-block"
                    color="default1"
                    __fontSize="15px"
                  >
                    size: {key}
                  </Box>
                </Box>
                <Text fontSize={key} lineHeight={key} letterSpacing={key}>
                  Some text
                </Text>
              </Box>
            );
          })}
      </Box>
    </Unstyled>
  );
};
