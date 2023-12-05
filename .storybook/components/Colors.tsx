import { Unstyled } from "@storybook/blocks";
import { Box, Text } from "~/components";
import { useTheme } from "~/theme";

const getColorsBy = (colors: Record<string, string>, field: string) =>
  Object.entries(colors)
    .filter(([key]) => key.startsWith(field))
    .sort();

interface ColorItemProps {
  colors: [string, string][];
}

const ColorItem = ({ colors }: ColorItemProps) => {
  return (
    <Box paddingY={7}>
      <Box display="flex" flexWrap="wrap" rowGap={10} columnGap={7}>
        {colors.map(([name, value]) => (
          <Box
            key={name}
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            __flexBasis="30%"
          >
            <Box width="100%">{name}</Box>
            <Box __fontSize="14px" __minWidth="100px">
              {value}
            </Box>
            <Box
              __backgroundColor={value}
              width="100%"
              height={7}
              borderRadius={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const ColorPresentation = () => {
  const { themeValues: vars } = useTheme();

  // console.log(getColorsBy(vars.colors.background, ""));

  const backgrounds = getColorsBy(vars.colors.background, "");
  const texts = getColorsBy(vars.colors.text, "");
  const borders = getColorsBy(vars.colors.border, "");

  return (
    <Unstyled>
      <Box>
        <Text variant="title" as="h2">
          Backgrounds
        </Text>
        <ColorItem colors={backgrounds} />
      </Box>
      <Box>
        <Text variant="title" as="h2">
          Texts
        </Text>
        <ColorItem colors={texts} />
      </Box>
      <Box>
        <Text variant="title" as="h2">
          Borders
        </Text>
        <ColorItem colors={borders} />
      </Box>
    </Unstyled>
  );
};
