import { ReactNode } from "react";
import { Box, Text } from "~/components";
import { useTheme } from "~/theme";

const getColorsBy = (colors: Record<string, string>, field: string) =>
  Object.entries(colors)
    .filter(([key]) => key.startsWith(field))
    .sort();

interface ColorItemProps {
  sectionName: string;
  colors: [string, string][];
  children: ReactNode;
}

const ColorItem = ({ sectionName, colors, children }: ColorItemProps) => {
  return (
    <Box paddingY={10}>
      <Text paddingY={5} variant="title" as="h3">
        {sectionName}
      </Text>
      <Text variant="caption" as="p">
        {children}
      </Text>
      <Box display="flex" flexWrap="wrap" rowGap={13} columnGap={10}>
        {colors.map(([name, value]) => (
          <Box
            key={name}
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            __flexBasis="30%"
          >
            <Box width="100%">{name}</Box>
            <Box fontSize="buttonSmall">{value}</Box>
            <Box
              __backgroundColor={value}
              width="100%"
              height={10}
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

  const backgroundsInteractive = getColorsBy(
    vars.colors.background,
    "interactive"
  );
  const backgroundsDecorative = getColorsBy(
    vars.colors.background,
    "decorative"
  );
  const backgroundsSurface = getColorsBy(vars.colors.background, "surface");
  const backgroundsHighlights = getColorsBy(
    vars.colors.background,
    "highlight"
  );
  const backgroundsOthers = [
    ...getColorsBy(vars.colors.background, "plain"),
    ...getColorsBy(vars.colors.background, "subdued"),
  ];

  const foregroundsIcon = getColorsBy(vars.colors.foreground, "icon");
  const foregroundsText = getColorsBy(vars.colors.foreground, "text");

  const bordersBrand = getColorsBy(vars.colors.border, "brand");
  const bordersCritical = getColorsBy(vars.colors.border, "critical");
  const bordersNeutral = getColorsBy(vars.colors.border, "neutral");

  return (
    <Box>
      <Text variant="title" as="h2">
        Backgrounds
      </Text>
      <ColorItem sectionName="Interactive" colors={backgroundsInteractive}>
        Describes any inteactvitity, such as pressing button, focusing or
        hovering element.
      </ColorItem>
      <ColorItem sectionName="Decorative" colors={backgroundsDecorative}>
        Ephasises the accent of a element that does not fit the rest of UI, eg.
        avatar, or some system badges.
      </ColorItem>
      <ColorItem sectionName="Surface" colors={backgroundsSurface}>
        The color of more contextural elements such as panels, areas,
        navigations, sidebars.
      </ColorItem>
      <ColorItem sectionName="Highlights" colors={backgroundsHighlights}>
        Brightents the given element among the surfaces.
      </ColorItem>
      <ColorItem sectionName="Others" colors={backgroundsOthers}>
        General purpose backgrounds, can be used for more sophisticated cases.
      </ColorItem>

      <Text variant="title" as="h2">
        Foregrounds
      </Text>
      <ColorItem sectionName="Icon" colors={foregroundsIcon}>
        Dedicated mostly for regular icons or for elements that act as an icon.
      </ColorItem>
      <ColorItem sectionName="Text" colors={foregroundsText}>
        Used to any text on the screen.
      </ColorItem>

      <Text variant="title" as="h2">
        Borders
      </Text>
      <ColorItem sectionName="Brand" colors={bordersBrand}>
        Represents the border that pays attention. Dedicated for representing
        states such as focus, hover, active.
      </ColorItem>
      <ColorItem sectionName="Critical" colors={bordersCritical}>
        Emphases error state or element that user should look at.
      </ColorItem>
      <ColorItem sectionName="Neutral" colors={bordersNeutral}>
        Neutral border. A initial state of the given element.
      </ColorItem>
    </Box>
  );
};
