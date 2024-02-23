import { Unstyled } from "@storybook/blocks";
import { Box, Text } from "~/components";
import { useTheme } from "~/theme";

export const FontWeightsPresentation = () => {
  const { themeValues: vars } = useTheme();

  return (
    <Unstyled>
      <Box display="flex" flexDirection="row" flexWrap="wrap" rowGap={7}>
        {Object.entries(vars.fontWeight)
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
                    {key}
                  </Box>
                </Box>
                <Text fontWeight={key}>Some text</Text>
              </Box>
            );
          })}
      </Box>
    </Unstyled>
  );
};
